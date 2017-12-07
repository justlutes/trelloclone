import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardContainer from '../containers/board/BoardContainer';
import Header from '../components/molecules/Header';
import ActiveBoardContainer from '../containers/board/ActiveBoardContainer';
import NotFound from './NotFound';

@DragDropContext(HTML5Backend)
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={BoardContainer} />
          <Route path="/board/:id" component={ActiveBoardContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
