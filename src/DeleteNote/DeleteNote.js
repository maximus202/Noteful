import React from 'react';
import { NoteContext } from '../NoteContext/NoteContext';
import PropTypes from 'prop-types';

class DeleteNote extends React.Component {
    static contextType = NoteContext;
    handleClickDelete(event) {
        const noteId = this.props.note.id;
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

DeleteNote.propTypes = {
    note: PropTypes.object
}

export default DeleteNote;