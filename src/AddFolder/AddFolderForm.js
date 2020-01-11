import React from 'react';
import Header from '../Header/Header';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class AddFolderForm extends React.Component {
    constructor() {
        super();
        this.folderNameInput = React.createRef();
        this.state = {
            folderName: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            folderName: event.target.value
        })
    };

    handleSubmitNewFolder(e) {
        e.preventDefault();
        const folderName = this.folderNameInput.current.value;
        const url = 'http://localhost:9090/folders';
        const data = {
            'name': folderName
        };
        const otherParams = {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'POST',
        };

        fetch(url, otherParams)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            })
            .then(responseJson => {
                this.setState({
                    folderName: responseJson.name
                })
            })
            .then(window.location.replace('/'))
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <form onSubmit={(e) => this.handleSubmitNewFolder(e)}>
                        <fieldset>
                            <legend>Add New Folder</legend>
                            Folder Name:
                        <input type='text' name='foldername' ref={this.folderNameInput} value={this.state.folderName} onChange={this.handleChange} />
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
    onClickGoBack: PropTypes.func
}

export default withRouter(AddFolderForm);