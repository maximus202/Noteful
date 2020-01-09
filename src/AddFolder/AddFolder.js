import React from 'react';
import { withRouter } from 'react-router';

class AddFolder extends React.Component {
    render() {
        console.log(this.props.onClickAddFolder)
        return (
            <button onClick={this.props.onClickAddFolder}>Add Folder</button>
        )
    }
}

export default withRouter(AddFolder);