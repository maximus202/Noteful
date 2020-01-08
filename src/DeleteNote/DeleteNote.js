import React from 'react';
import { NoteContext } from '../NoteContext/NoteContext';

class DeleteNote extends React.Component {
    static contextType = NoteContext;
    handleClickDelete(event) {
        const noteId = this.props.note.id;
        console.log(noteId)
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
            .then(data => {
                this.context.handleDeleteNote(noteId);
            })
            .catch(error => {
                console.error({ error })
            })
    }
    render() {
        return (
            <>
                <button type="button" onClick={(event) => this.handleClickDelete(this.props.note)}>Delete Note</button>
            </>
        )
    }
}

export default DeleteNote;