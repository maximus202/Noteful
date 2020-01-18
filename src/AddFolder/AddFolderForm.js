import React from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { NoteContext } from '../NoteContext/NoteContext';

class AddFolderForm extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    return (
                        <>
                            <header>
                                <Header />
                            </header>
                            <main>
                                <form onSubmit={(e) => {
                                    value.handleSubmitNewFolder(e, this.props.history)
                                }}>
                                    <fieldset>
                                        <legend>Add New Folder</legend>
                                        Folder Name:
                        <input type='text' name='foldername' value={value.folderName} onChange={value.handleChange} required />
                                        <button type='submit'>Create</button>
                                    </fieldset>
                                </form>
                            </main>
                            <aside>
                                <button type='button' onClick={this.props.onClickGoBack}>Go back</button>
                            </aside>
                        </>
                    )
                }}
            </NoteContext.Consumer>
        )
    }
}

AddFolderForm.propTypes = {
    onClickGoBack: PropTypes.func.isRequired
}

export default withRouter(AddFolderForm);