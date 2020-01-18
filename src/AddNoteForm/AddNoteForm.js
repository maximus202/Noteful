import React from 'react';
import Header from '../Header/Header';
import { NoteContext } from '../NoteContext/NoteContext';
import PropTypes from 'prop-types';

class AddNoteForm extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    return (
                        <>
                            <header>
                                <Header />
                            </header>
                            <main>
                                <form onSubmit={(e) => value.handleSubmitNote(e, this.props.history)}>
                                    <fieldset>
                                        <legend>Add Note</legend>
                                        <input type='text' placeholder='Note title' name='name' onChange={value.handleNoteTitleChange} required></input>
                                        <input type='text' placeholder='Write your note here' name='note' onChange={value.handleContentChange} required></input>
                                        <label>Select a folder to save your note:</label>
                                        {value.folders.map((folder) => {
                                            return (
                                                <div key={folder.id}>
                                                    < input type='radio' name='folder' id={folder.id} value={folder.name} onChange={value.handleFolderIdChange} required ></input>
                                                    <label htmlFor={folder.name}>{folder.name}</label>
                                                </div>
                                            )
                                        })}
                                        <input type='submit' value='Create'></input>
                                    </fieldset>
                                </form>
                            </main>
                            <aside>
                                <button type='button' onClick={this.props.onClickGoBack}>Go back</button>
                            </aside>
                            <p>{value.noteTitle}</p>
                            <p>{value.content}</p>
                        </>
                    )
                }
                }
            </NoteContext.Consumer >
        )
    }
}

AddNoteForm.propTypes = {
    onClickGoBack: PropTypes.func.isRequired
}

export default AddNoteForm;