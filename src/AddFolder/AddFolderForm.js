import React from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { NoteContext } from '../NoteContext/NoteContext';

class AddFolderForm extends React.Component {
    static contextType = NoteContext;

    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <form onSubmit={(e) => {
                        this.context.handleSubmitNewFolder(e, this.props.history)
                    }}>
                        <fieldset>
                            <legend>Add New Folder</legend>
                            Folder Name:
                        <input type='text' name='foldername' value={this.context.folderName} onChange={this.context.handleChange} required />
                            <button type='submit'>Create</button>
                        </fieldset>
                    </form>
                </main>
                <aside>
                    <button type='button' onClick={this.props.onClickGoBack}>Go back</button>
                </aside>
            </>
        )
    }
}

AddFolderForm.propTypes = {
    onClickGoBack: PropTypes.func.isRequired
}

export default withRouter(AddFolderForm);