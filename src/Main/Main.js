import React from 'react';
import Header from '../Header/Header';
import NOTES from '../NOTES/NOTES';
import { Link } from 'react-router-dom';
import '../Main/Main.css';

class Main extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    {NOTES.notes.map(note =>
                        <div key={note.id}>
                            <p><Link to={`/note/${note.id}`}>{note.name}</Link></p>
                            <p>Last modified on: {note.modified}</p>
                        </div>
                    )}
                </main>
                <aside>
                    {NOTES.folders.map(folder =>
                        <div key={folder.id}>
                            <button className='folder_button'>
                                <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                            </button>
                        </div>
                    )}
                </aside>
            </div>
        )
    }
}

export default Main;