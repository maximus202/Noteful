import React from 'react';
import { Route } from 'react-router-dom';
//import NOTES from './NOTES/NOTES';
import Main from './Main/Main';
import Folder from './Folder/Folder';
import Note from './Note/Note';
import { promised } from 'q';
import NoteContext from './NoteContext/NoteContext';

class App extends React.Component {
  /*constructor(props) {
    super(props)
    this.state = {
      folders: [],
      notes: []
    };
  }*/

  render() {
    console.log('render')
    return (
      <>
        <Route
          exact path='/'
          render={(routerProps) =>
            <Main
            /*storedNotes={this.state}*/
            />}
        />
        <Route
          exact path='/folder/:folderId'
          render={(routerProps) =>
            < Folder
            /*storedNotes={this.state}*/
            />}
        />
        <Route exact path='/note/:noteId'
          render={({ history }) => {
            return <Note /*storedNotes={this.state}*/ onClickGoBack={() => history.goBack()} />
          }} />
      </>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('http://localhost:9090/folders')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
        }
      }).then(responseJson => {
        this.setState({
          folders: responseJson
        })
      })

      .then(() => fetch('http://localhost:9090/notes')).then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return response.json().then(responseJson => Promise.reject(new Error(responseJson)))
        }
      }).then(responseJson => {
        this.setState({
          notes: responseJson
        })
      })
  }

}

export default App;