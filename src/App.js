import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main/Main';
import Folder from './Folder/Folder';
import Note from './Note/Note';
import { NoteProvider } from './NoteContext/NoteContext';

class App extends React.Component {
  render() {
    return (
      <>
        <NoteProvider>
          <Route
            exact path='/'
            render={(routerProps) =>
              <Main />}
          />
          <Route
            exact path='/folder/:folderId'
            render={(routerProps) =>
              < Folder />}
          />
          <Route exact path='/note/:noteId'
            render={({ history }) => {
              return <Note onClickGoBack={() => history.goBack()} />
            }} />
        </NoteProvider>
      </>
    )
  }
}

export default App;