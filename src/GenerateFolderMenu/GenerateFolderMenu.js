import React from 'react';
import { NavLink } from 'react-router-dom';

class GenerateFolderMenu extends React.Component {
    render() {
        return (
            <>
                <button className='folder_button'>
                    <NavLink to={`/folder/${this.props.folder.id}`}>{this.props.folder.name}</NavLink>
                </button>
            </>
        )
    }
}

export default GenerateFolderMenu;