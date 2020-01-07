import React from 'react';
import Header from '../Header/Header';
import './Folder.css';
import GenerateFolderMenu from '../GenerateFolderMenu/GenerateFolderMenu';
import AddNote from '../AddNote/AddNote';
import GenerateNoteList from '../GenerateNoteList/GenerateNoteList';
import { withRouter } from 'react-router';
import AddFolder from '../AddFolder/AddFolder';
import { NoteContext } from '../NoteContext/NoteContext';

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
                                <AddNote />
                            </main>
                            <aside>
                                {value.folders.map(folder =>
                                    <GenerateFolderMenu
                                        folder={folder}
                                        key={folder.id} />
                                )}
                                <AddFolder />
                            </aside>
                        </>
                    )
                }}
            </NoteContext.Consumer>
        )
    }
}

export default withRouter(Folder);