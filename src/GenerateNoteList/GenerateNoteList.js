import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote';
import PropTypes from 'prop-types';

class GenerateNoteList extends React.Component {
    render() {
        return (
            <div key={this.props.note.sid}>
                <p><Link to={`/note/${this.props.note.sid}`}>{this.props.note.note_title}</Link></p>
                <p>Last modified on: {this.props.note.modified}</p>
                <DeleteNote note={this.props.note} />
            </div>
        )
    }
}

GenerateNoteList.propTypes = {
    note: PropTypes.object.isRequired
}

export default GenerateNoteList;