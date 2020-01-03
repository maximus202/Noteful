import React from 'react';
import Main from './Main/Main';
import { Route } from 'react-router-dom';
import NOTES from './NOTES/NOTES';
import Folder from './Folder/Folder';
import Note from './Note/Note';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: { NOTES }
    };
  }

  render() {
    return (
      <div>
        <main>
          <Route exact path='/' component={Main} />
          <Route exact path='/folder/:folderId' component={Folder} />
          <Route exact path='/note/:noteId' component={Note} render={({ history }) => { return <Note onClickGoBack={() => history.goBack()} /> }} />
        </main>
      </div>
    )
  }
}

export default App;