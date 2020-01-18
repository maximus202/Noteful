import React from 'react';
import { NoteContext } from '../NoteContext/NoteContext';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class DeleteNote extends React.Component {
    render() {
        return (
            <NoteContext.Consumer>
                {(value) => {
                    return (
                        <>
                            <button type="button" onClick={(e) => value.handleClickDelete(this.props.note)}>Delete Note</button>
                        </>
                    )
                }}
            </NoteContext.Consumer>
        )
    }
}

DeleteNote.propTypes = {
    note: PropTypes.object.isRequired
}

export default withRouter(DeleteNote);