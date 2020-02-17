import React from 'react';
import { NavLink } from 'react-router-dom';
import './GenerateFolderMenu.css';
import PropTypes from 'prop-types';

class GenerateFolderMenu extends React.Component {
    render() {
        return (
            <>
                <button className='folder_button'>
                    <NavLink activeClassName="active" to={`/folder/${this.props.folder.id}`}>{this.props.folder.folder_name}</NavLink>
                </button>
            </>
        )
    }
}

GenerateFolderMenu.propTypes = {
    folder: PropTypes.object
}

export default GenerateFolderMenu;