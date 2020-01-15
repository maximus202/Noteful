import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class AddFolder extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClickAddFolder}>Add Folder</button>
        )
    }
}

AddFolder.propTypes = {
    onClickAddFolder: PropTypes.func.isRequired
}

export default withRouter(AddFolder);