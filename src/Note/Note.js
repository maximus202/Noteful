import React from 'react';
import Header from '../Header/Header';
import NOTES from '../NOTES/NOTES';

class Note extends React.Component {
    render() {
        const noteId = this.props.match.params.noteId;
        const selectedNote = NOTES.notes.filter(note => note.id === noteId)
        console.log(selectedNote);
        return /*(
            <>
            <header>
                <Header />
            </header>
                <main>
                    <h2>{selectedNote[0].name}</h2>
                    <p>Date modified: {selectedNote[0].modified}</p>
                    <p>{selectedNote[0].content}</p>
                </main>
                <aside>
                    <button onClick={this.props.onClickGoBack}>
                        Go back
                    </button>
                </aside>
            </>
        )*/
    }
}

export default Note;