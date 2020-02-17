import React from 'react';
import Header from '../Header/Header';
import GenerateNote from '../GenerateNote/GenerateNote';
import { withRouter } from 'react-router';
import { NoteContext } from '../NoteContext/NoteContext';
import GenerateNoteError from '../ErrorBoundaries/GenerateNoteError';
import PropTypes from 'prop-types';
import DeleteNote from '../DeleteNote/DeleteNote';

class Note extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    const noteId = this.props.match.params.noteId;
                    const selectedNote = value.notes.filter(note => note.sid == noteId);
                    console.log(value.notes.filter(note => note.sid == noteId))
                    console.log(value.folders.filter(folder => folder.id == selectedNote[0].folder_id)[0].folder_name)
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
                                <DeleteNote note={selectedNote[0]} />
                                <div>
                                    Folder: {value.folders.filter(folder => folder.id == selectedNote[0].folder_id)[0].folder_name}
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