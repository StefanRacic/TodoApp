import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Components/Pages/Home';
import Navbar from './Components/Layout/Navbar';
import Table from './Components/todos/Table';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import AuthState from '../src/Components/context/auth/AuthState';
import setAuthToken from '../src/util/setAuthToken';
import PrivateRoute from '../src/Components/routing/PrivateRoute';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/table" component={Table} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;
