import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import DragQueens from '../../containers/DragQueens';
import QueenDetail from '../queens/QueenDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}
          render={routerProps => (
            <DragQueens {...routerProps} />
          )} />
        <Route path="/queen/:id" exact={true}
          render={routerProps => (
            <QueenDetail {...routerProps} />
          )} />
      </Switch>
    </Router>
  );
}

export default App;
