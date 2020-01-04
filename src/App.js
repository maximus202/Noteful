import React from 'react';
import { Route } from 'react-router-dom';
import NOTES from './NOTES/NOTES';
import Main from './Main/Main';
import Folder from './Folder/Folder';
import Note from './Note/Note';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      storedNotes: { NOTES },
      currentFolderId: []
    };
  }

  render() {
    return (
      <>
        <Route
          exact path='/'
          render={(routerProps) =>
            <Main
              storedNotes={this.state.storedNotes} />}
        />
        <Route
          exact path='/folder/:folderId'
          render={(routerProps) =>
            < Folder
              storedNotes={this.state.storedNotes}
            />}
        />
        <Route exact path='/note/:noteId'
          render={({ history }) => {
            return <Note storedNotes={this.state.storedNotes} onClickGoBack={() => history.goBack()} />
          }} />
      </>
    )
  }
}

export default App;