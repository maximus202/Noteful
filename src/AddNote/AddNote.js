import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class AddNote extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClickAddNote}>Add Note</button>
        )
    }
}

AddNote.propTypes = {
    onClickAddNote: PropTypes.func
}

export default withRouter(AddNote);