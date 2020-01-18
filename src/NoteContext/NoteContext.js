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
            note.id !== noteId)
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
        const url = 'http://localhost:9090/folders';
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
    handleClickDelete = (e) => {
        const noteId = e.id;
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            })
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
        const noteTitleInput = this.state.noteTitle;
        const folderInput = this.state.folderId;
        const contentInput = this.state.content;
        const url = 'http://localhost:9090/notes';
        const data = {
            'name': noteTitleInput,
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
                    notes: [...this.state.notes, responseJson]
                })
            })
            .then(() => history.push('/'))
            .catch(error => {
                console.error({ error })
            })
    }

    componentDidMount() {
        fetch('http://localhost:9090/folders')
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

            .then(() => fetch('http://localhost:9090/notes')).then((response) => {
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