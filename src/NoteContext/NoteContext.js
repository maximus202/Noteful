import React from 'react';
import NOTES from '../NOTES/NOTES';

export const NoteContext = React.createContext({
    //storedNotes: { NOTES }
})

export class NoteProvider extends React.Component {
    state = {
        folders: [],
        notes: []
    }
    render() {
        return (
            <NoteContext.Provider value={{
                state: this.state,
                setFolders: (responseJson) => this.setState({
                    folders: responseJson
                }),
                setNotes: (responseJson) => this.setState({
                    notes: responseJson
                })
            }}    >
                {this.props.children}
            </NoteContext.Provider >
        )
    }
}