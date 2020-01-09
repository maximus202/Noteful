import React from 'react';
import { withRouter } from 'react-router';

class AddNote extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClickAddNote}>Add Note</button>
        )
    }
}

export default withRouter(AddNote);