import React from 'react';
import Header from '../Header/Header';
import '../Main/Main.css';
import GenerateNoteList from '../GenerateNoteList/GenerateNoteList';
import AddNote from '../AddNote/AddNote';
import GenerateFolderMenu from '../GenerateFolderMenu/GenerateFolderMenu';
import AddFolder from '../AddFolder/AddFolder';
import { NoteContext } from '../NoteContext/NoteContext';
import AppLoadError from '../ErrorBoundaries/AppLoadError';
import PropTypes from 'prop-types';

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
                            <AppLoadError>
                                <main>
                                    {value.notes.map(note =>
                                        < GenerateNoteList
                                            note={note}
                                            key={note.sid} />
                                    )}
                                    <AddNote
                                        onClickAddNote={() => {
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
                            </AppLoadError>
                        </>
                    )
                }}
            </NoteContext.Consumer>
        )
    }
}

Main.propTypes = {
    history: PropTypes.object.isRequired
}

export default Main;