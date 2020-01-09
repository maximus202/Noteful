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
                                <form>
                                    <fieldset>
                                        <legend>Add Note</legend>
                                        <input type='text' placeholder='Note title' name='name' required></input>
                                        <input type='text' placeholder='Write your note here' name='note' required></input>
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