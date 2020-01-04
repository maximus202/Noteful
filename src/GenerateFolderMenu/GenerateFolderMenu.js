import React from 'react';
import { NavLink } from 'react-router-dom';
import './GenerateFolderMenu.css';

class GenerateFolderMenu extends React.Component {
    render() {
        return (
            <>
                <button className='folder_button'>
                    <NavLink activeClassName="active" to={`/folder/${this.props.folder.id}`}>{this.props.folder.name}</NavLink>
                </button>
            </>
        )
    }
}

export default GenerateFolderMenu;