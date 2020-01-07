import React from 'react';

export const NoteContext = React.createContext()

export class NoteProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folders: [],
            notes: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9090/folders')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            }).then(responseJson =>
                this.setState({
                    folders: responseJson
                })
            )

            .then(() => fetch('http://localhost:9090/notes')).then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
                }
            }).then(responseJson =>
                this.setState({
                    notes: responseJson
                })
            )
    }

    render() {
        return (
            <NoteContext.Provider value={this.state}>
                {this.props.children}
            </NoteContext.Provider >
        )
    }
}