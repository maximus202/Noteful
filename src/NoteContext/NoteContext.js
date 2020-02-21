import React from 'react';

export const NoteContext = React.createContext()

export class NoteProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folders: [],
            notes: [],
            folderName: '',
            noteTitle: '',
            folderId: '',
            content: '',
            handleDeleteNote: this.handleDeleteNote,
            handleChange: this.handleChange,
            handleSubmitNewFolder: this.handleSubmitNewFolder,
            handleClickDelete: this.handleClickDelete,
            handleNoteTitleChange: this.handleNoteTitleChange,
            handleContentChange: this.handleContentChange,
            handleFolderIdChange: this.handleFolderIdChange,
            handleSubmitNote: this.handleSubmitNote
        }
    }

    handleDeleteNote = (noteId) => {
        const newNotes = this.state.notes.filter(note =>
            note.sid !== noteId)
        this.setState({
            notes: newNotes
        })
    }

    handleChange = (event) => {
        this.setState({
            folderName: event.target.value
        })
    }

    handleNoteTitleChange = (event) => {
        this.setState({
            noteTitle: event.target.value
        })
    }

    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleFolderIdChange = (event) => {
        this.setState({
            folderId: event.target.id
        })
    }

    //NEW FOLDER
    handleSubmitNewFolder = (e, history = []) => {
        e.preventDefault();
        const folderName = this.state.folderName;
        const url = 'https://guarded-spire-51015.herokuapp.com/api/folders';
        const data = {
            'name': folderName
        };
        const otherParams = {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'POST',
        };

        return fetch(url, otherParams)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            })
            .then(responseJson => {
                this.setState({
                    folders: [...this.state.folders, responseJson]
                })
            })
            .then(() => history.push('/'))
            .catch(error => {
                console.error({ error })
            })
    }

    //DELETE NOTE
    handleClickDelete = (e, history = []) => {
        const noteId = e.sid;
        fetch(`https://guarded-spire-51015.herokuapp.com/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then((response) => {
                if (response.ok) {
                    //do nothing
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            })
            .then(() => history.push('/'))
            .then(() => {
                this.handleDeleteNote(noteId)
            })

            .catch(error => {
                console.error({ error })
            })
    }

    //NEW NOTE
    handleSubmitNote = (e, history) => {
        e.preventDefault();
        console.log(this.state)
        const noteTitleInput = this.state.noteTitle;
        const folderInput = this.state.folderId;
        const contentInput = this.state.content;
        const modifiedDate = new Date;
        const url = 'https://guarded-spire-51015.herokuapp.com/api/notes';
        const data = {
            'note_title': noteTitleInput,
            'folder_id': folderInput,
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
                    notes: [...this.state.notes, responseJson]
                })
            })
            .then(() => history.push('/'))
            .catch(error => {
                console.error({ error })
            })
    }

    componentDidMount() {
        fetch('https://guarded-spire-51015.herokuapp.com/api/folders')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            }).then(responseJson =>
                this.setState({
                    folders: responseJson
                })
            )

            .then(() => fetch('https://guarded-spire-51015.herokuapp.com/api/notes')).then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            }).then(responseJson =>
                this.setState({
                    notes: responseJson
                })
            )
    }

    render() {
        return (
            < NoteContext.Provider value={this.state}>
                {this.props.children}
            </NoteContext.Provider >
        )
    }
}