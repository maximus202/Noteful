import React from 'react';
import Header from '../Header/Header';
import GenerateNote from '../GenerateNote/GenerateNote';
import { withRouter } from 'react-router';
import { NoteContext } from '../NoteContext/NoteContext';
import GenerateNoteError from '../ErrorBoundaries/GenerateNoteError';
import PropTypes from 'prop-types';

class Note extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    const noteId = this.props.match.params.noteId;
                    const selectedNote = value.notes.filter(note => note.id === noteId);
                    return (
                        <>
                            <header>
                                <Header />
                            </header>
                            <GenerateNoteError>
                                <main>
                                    <GenerateNote
                                        selectedNote={selectedNote} />
                                </main>
                            </GenerateNoteError>
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

Note.propTypes = {
    match: PropTypes.object.isRequired,
    onClickGoBack: PropTypes.func.isRequired
};

export default withRouter(Note);