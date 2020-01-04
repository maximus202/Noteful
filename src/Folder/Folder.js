import React from 'react';
import Header from '../Header/Header';
import NOTES from '../NOTES/NOTES';
import { Link } from 'react-router-dom';
import './Folder.css';
import GenerateFolderMenu from '../GenerateFolderMenu/GenerateFolderMenu';
import AddNote from '../AddNote/AddNote';
import GenerateNoteList from '../GenerateNoteList/GenerateNoteList';
import { withRouter } from 'react-router';

class Folder extends React.Component {
    //static propTypes = {
    //  match: this.propTypes.object.isRequired
    //}
    render() {
        const { match } = this.props;
        return (
            <>
                {console.log(match)}
            </>
        )
    }
}

const showMatch = withRouter(Folder);

/*class Folder extends React.Component {
    render() {
        const folderId = withRouter(this.props.match.params.folderId);
        console.log(folderId);
        console.log(NOTES.folders.find(folderId));
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    {this.props.storedNotes.map(note =>
                        < GenerateNoteList
                            note={note}
                            key={note.id} />
                    )}
                </main>
                <aside>
                    {this.props.storedNotes.map(folder =>
                        <GenerateFolderMenu
                            folder={folder}
                            key={folder.id}
                            handleSetCurrentFolder={this.props.setCurrentFolder}
                        />
                    )}
                </aside>
            </>
        )
    }
}
*/

export default Folder;