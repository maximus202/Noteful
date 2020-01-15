import React from 'react';
import Header from '../Header/Header';
import './Folder.css';
import GenerateFolderMenu from '../GenerateFolderMenu/GenerateFolderMenu';
import AddNote from '../AddNote/AddNote';
import GenerateNoteList from '../GenerateNoteList/GenerateNoteList';
import { withRouter } from 'react-router';
import AddFolder from '../AddFolder/AddFolder';
import { NoteContext } from '../NoteContext/NoteContext';
import PropTypes from 'prop-types';

class Folder extends React.Component {
    render() {
        const folderId = this.props.match.params.folderId;
        return (
            <NoteContext.Consumer>
                {(value) => {
                    return (
                        <>
                            <header>
                                <Header />
                            </header>
                            <main>
                                {value.notes.map(note => {
                                    if (folderId === note.folderId) {
                                        return <GenerateNoteList note={note} key={note.id} />
                                    }
                                }
                                )}
                                <AddNote onClickAddNote={() => {
                                    this.props.history.push('/addnote')
                                }} />
                            </main>
                            <aside>
                                {value.folders.map(folder =>
                                    <GenerateFolderMenu
                                        folder={folder}
                                        key={folder.id} />
                                )}
                                <AddFolder onClickAddFolder={() => {
                                    this.props.history.push('/addfolder')
                                }} />
                            </aside>
                        </>
                    )
                }}
            </NoteContext.Consumer>
        )
    }
}

Folder.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(Folder);