import React from 'react';
import Header from '../Header/Header';
import GenerateNote from '../GenerateNote/GenerateNote';
import { withRouter } from 'react-router';
import { NoteContext } from '../NoteContext/NoteContext';

class Note extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    const noteId = this.props.match.params.noteId;
                    const selectedNote = value.notes.filter(note => note.id === noteId);
                    const selectedNoteFolderId = selectedNote[0].id
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
                                    Folder: {value.folders.filter(folder => folder.id == selectedNote[0].folderId)[0].name}
                                </div>
                            </aside>
                        </>
                    )
                }}
            </NoteContext.Consumer>
        )
    }
}

export default withRouter(Note);