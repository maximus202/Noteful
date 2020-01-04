import React from 'react';
import Header from '../Header/Header';
import GenerateNote from '../GenerateNote/GenerateNote';
import { withRouter } from 'react-router';

class Note extends React.Component {
    render() {
        const noteId = this.props.match.params.noteId;
        const selectedNote = this.props.storedNotes.NOTES.notes.filter(note => note.id === noteId);
        const selectedNoteFolderId = selectedNote[0].folderId;
        const selectedNoteFolder = this.props.storedNotes.NOTES.folders.filter(folder => folder.id === selectedNoteFolderId);
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <GenerateNote selectedNote={selectedNote} />
                </main>
                <aside>
                    <button onClick={this.props.onClickGoBack}>
                        Go back
                    </button>
                    <div>
                        Folder: {selectedNoteFolder[0].name}
                    </div>
                </aside>
            </>
        )
    }
}

export default withRouter(Note);