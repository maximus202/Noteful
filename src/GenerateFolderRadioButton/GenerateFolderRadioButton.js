import React from 'react';

class GenerateFolderRadioButton extends React.Component {
    render() {
        console.log(this.props.folder.name)
        const folderName = this.props.folder.name;
        return (
            <>
                <input type='radio' name='folder' id={folderName} value={folderName}></input>
                <label for={folderName}>{folderName}</label>
            </>
        )
    }
}

export default GenerateFolderRadioButton;