import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import DragQueens from '../../containers/DragQueens.jsx';
import QueenDetail from '../queens/QueenDetail.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}
          render={routerProps => (
            <DragQueens {...routerProps} />
          )} />
        <Route path="/queen/:id"
          component={QueenDetail}
        />
      </Switch>
    </Router>
  );
}

export default App;
