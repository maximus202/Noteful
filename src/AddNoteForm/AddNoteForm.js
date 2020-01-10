import React from 'react';
import Header from '../Header/Header';
import { NoteContext } from '../NoteContext/NoteContext';
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
            folderId: event.target.id
        })
    }

    handleSubmitNote(e) {
        e.preventDefault();
        const nameInput = this.state.name;
        const folderInput = this.state.folderId;
        const contentInput = this.state.content;
        const url = 'http://localhost:9090/notes';
        const data = {
            'name': nameInput,
            'folderId': folderInput,
            'content': contentInput,
        };
        const otherParams = {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'POST',
        };

        fetch(url, otherParams)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            })
            .then(responseJson => {
                this.setState({
                    name: responseJson.name,
                    folderId: responseJson.folderId,
                    content: responseJson.content
                })
            })
            .then(window.location.replace('/'))
            .catch(error => {
                console.error({ error })
            })
    }

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
                                <form onSubmit={(e) => this.handleSubmitNote(e)}>
                                    <fieldset>
                                        <legend>Add Note</legend>
                                        <input type='text' placeholder='Note title' name='name' onChange={this.handleNameChange} required></input>
                                        <input type='text' placeholder='Write your note here' name='note' onChange={this.handleContentChange} required></input>
                                        <label>Select a folder to save your note:</label>
                                        {value.folders.map((folder) => {
                                            return (
                                                <div key={folder.id}>
                                                    < input type='radio' name='folder' id={folder.id} value={folder.name} onChange={this.handleFolderIdChange} ></input>
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
                            <p>{this.state.name}</p>
                            <p>{this.state.folderId}</p>
                            <p>{this.state.content}</p>
                        </>
                    )
                }
                }
            </NoteContext.Consumer >
        )
    }
}

export default AddNoteForm;