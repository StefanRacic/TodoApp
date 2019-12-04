import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Components/Pages/Home';
import Navbar from './Components/util/Navbar';
import Table from './Components/todos/Table';
import Login from './Components/auth/Login';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
