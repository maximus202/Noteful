import React from 'react';
import Header from '../Header/Header';
import NOTES from '../NOTES/NOTES';
import { Link } from 'react-router-dom';
import './Folder.css';

class Folder extends React.Component {
    render() {
        const folderId = this.props.match.params.folderId;
        const folderContent = NOTES.notes.filter(note => note.folderId === folderId);
        console.log(folderId);
        console.log(folderContent);
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main>
                    {folderContent.map(note =>
                        <div key={note.id}>
                            <p><Link to={`/Note/${note.id}`}>{note.name}</Link></p>
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

export default Folder;