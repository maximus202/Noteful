import React from 'react';

class GenerateFolderRadioButton extends React.Component {
    render() {
        console.log(this.props.folder.name)
        const folderName = this.props.folder.name;
        return (
            <>
                <input type='radio' name='folder' value={folderName}>{folderName}</input>
            </>
        )
    }
}

export default GenerateFolderRadioButton;