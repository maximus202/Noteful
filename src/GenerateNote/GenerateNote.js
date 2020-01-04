import React from 'react';

class GenerateNote extends React.Component {
    render() {
        const selectedNote = this.props.selectedNote
        return (
            <>
                <h2>{selectedNote[0].name}</h2>
                <p>Date modified: {selectedNote[0].modified}</p>
                <p>{selectedNote[0].content}</p>
            </>
        )
    }
}

export default GenerateNote;