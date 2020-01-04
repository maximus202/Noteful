import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote';

class GenerateNoteList extends React.Component {
    render() {
        return (
            <div key={this.props.note.id}>
                <p><Link to={`/note/${this.props.note.id}`}>{this.props.note.name}</Link></p>
                <p>Last modified on: {this.props.note.modified}</p>
                <DeleteNote note={this.props.note} />
            </div>
        )
    }
}

export default GenerateNoteList;