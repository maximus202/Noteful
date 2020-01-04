import React from 'react';
import Header from '../Header/Header';
import NOTES from '../NOTES/NOTES';
import { Link } from 'react-router-dom';
import './Folder.css';
import GenerateFolderMenu from '../GenerateFolderMenu/GenerateFolderMenu';
import AddNote from '../AddNote/AddNote';
import GenerateNoteList from '../GenerateNoteList/GenerateNoteList';
import { withRouter } from 'react-router';
import AddFolder from '../AddFolder/AddFolder';

class Folder extends React.Component {
    render() {
        const folderId = this.props.match.params.folderId;
        console.log(folderId);
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    {this.props.storedNotes.NOTES.notes.map(note => {
                        if (folderId === note.folderId) {
                            return <GenerateNoteList note={note} key={note.id} />
                        }
                    }
                    )}
                    <AddNote />
                </main>
                <aside>
                    {this.props.storedNotes.NOTES.folders.map(folder =>
                        <GenerateFolderMenu
                            folder={folder}
                            key={folder.id} />
                    )}
                    <AddFolder />
                </aside>
            </>
        )
    }
}

export default withRouter(Folder);