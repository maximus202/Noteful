import React from 'react';
import PropTypes from 'prop-types';

class GenerateNote extends React.Component {
    render() {
        const selectedNote = this.props.selectedNote
        return (
            <>
                <h2>{selectedNote[0].note_title}</h2>
                <p>{selectedNote[0].content}</p>
            </>
        )
    }
}

GenerateNote.propTypes = {
    selectedNote: PropTypes.array.isRequired
}

export default GenerateNote;