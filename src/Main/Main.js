import React from 'react';
import Header from '../Header/Header';
import NOTES from '../NOTES/NOTES';
import { Link } from 'react-router-dom';
import '../Main/Main.css';
import GenerateNoteList from '../GenerateNoteList/GenerateNoteList';
import AddNote from '../AddNote/AddNote';
import GenerateFolderMenu from '../GenerateFolderMenu/GenerateFolderMenu';
import AddFolder from '../AddFolder/AddFolder';
import NoteContext from '../NoteContext/NoteContext';

class Main extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    console.log(value)
                    return (
                        <>
                            <header>
                                <Header />
                            </header>
                            <main>
                                {value.storedNotes.NOTES.notes.map(note =>
                                    < GenerateNoteList
                                        note={note}
                                        key={note.id} />
                                )}
                                <AddNote />
                            </main>
                            <aside>
                                {value.storedNotes.NOTES.folders.map(folder =>
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

export default Main;