import React from 'react';
import Header from '../Header/Header';
import '../Main/Main.css';
import GenerateNoteList from '../GenerateNoteList/GenerateNoteList';
import AddNote from '../AddNote/AddNote';
import GenerateFolderMenu from '../GenerateFolderMenu/GenerateFolderMenu';
import AddFolder from '../AddFolder/AddFolder';
import { NoteContext } from '../NoteContext/NoteContext';

class Main extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    return (
                        <>
                            <header>
                                <Header />
                            </header>
                            <main>
                                {value.notes.map(note =>
                                    < GenerateNoteList
                                        note={note}
                                        key={note.id} />
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

export default Main;