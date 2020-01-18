import React from 'react';
//exports
export const NoteContext = React.createContext()

export class NoteProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folders: [],
            notes: [],
            folderName: '',
            handleDeleteNote: this.handleDeleteNote,
            handleChange: this.handleChange,
            handleSubmitNewFolder: this.handleSubmitNewFolder
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
    };

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