import React from 'react';
import Header from '../Header/Header';
import NOTES from '../NOTES/NOTES';
import { Link } from 'react-router-dom';
import '../Main/Main.css';
import GenerateNoteList from '../GenerateNoteList/GenerateNoteList';
import AddNote from '../AddNote/AddNote';
import GenerateFolderMenu from '../GenerateFolderMenu/GenerateFolderMenu';
import AddFolder from '../AddFolder/AddFolder';

class Main extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    {this.props.storedNotes.NOTES.notes.map(note =>
                        < GenerateNoteList
                            note={note}
                            key={note.id} />
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

export default Main;