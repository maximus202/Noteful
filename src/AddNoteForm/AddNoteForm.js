import React from 'react';
import Header from '../Header/Header';
import { NoteContext } from '../NoteContext/NoteContext';
import GenerateFolderRadioButton from '../GenerateFolderRadioButton/GenerateFolderRadioButton';

class AddNoteForm extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            folderId: '',
            content: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleContentChange = this.handleContentChange.bind(this)
        this.handleFolderIdChange = this.handleFolderIdChange.bind(this)
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleFolderIdChange(event) {
        this.setState({
            folderId: event.target.value
        })
    }

    handleSubmitNote(e) {
        e.preventDefault();
        console.log(e)
    }

    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    console.log(value.folders)
                    return (
                        <>
                            <header>
                                <Header />
                            </header>
                            <main>
                                <form onSubmit={(e) => this.handleSubmitNote(e)}>
                                    <fieldset>
                                        <legend>Add Note</legend>
                                        <input type='text' placeholder='Note title' name='name' ref={this.nameInput} onChange={this.handleNameChange} required></input>
                                        <input type='text' placeholder='Write your note here' name='note' ref={this.contentInput} onChange={this.handleContentChange} required></input>
                                        {value.folders.map(folder =>
                                            <GenerateFolderRadioButton key={folder.id} folder={folder} />
                                        )}
                                        <input type='submit' value='Create'></input>
                                    </fieldset>
                                </form>
                            </main>
                            <aside>
                                <button type='button' onClick={this.props.onClickGoBack}>Go back</button>
                            </aside>
                        </>
                    )
                }
                }
            </NoteContext.Consumer>
        )
    }
}

export default AddNoteForm;