import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main/Main';
import Folder from './Folder/Folder';
import Note from './Note/Note';
import { NoteProvider } from './NoteContext/NoteContext';
import AddFolderForm from './AddFolder/AddFolderForm';
import AddNoteForm from './AddNoteForm/AddNoteForm';

class App extends React.Component {
  render() {
    return (
      <>
        <NoteProvider>
          <Route
            exact path='/'
            render={({ history }) =>
              <Main history={history} />}
          />
          <Route
            exact path='/folder/:folderId'
            render={(routerProps) =>
              < Folder />}
          />
          <Route
            exact path='/note/:noteId'
            render={({ history }) => {
              return <Note onClickGoBack={() => history.goBack()} />
            }} />
          <Route
            exact path='/addfolder'
            render={({ history }) => {
              return <AddFolderForm onClickGoBack={() => history.goBack()} />
            }}>
          </Route>
          <Route
            exact path='/addnote'
            render={({ history }) => {
              return <AddNoteForm onClickGoBack={() => history.goBack()} />
            }}>
          </Route>
        </NoteProvider>
      </>
    )
  }
}

export default App;