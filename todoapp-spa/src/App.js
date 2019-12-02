import React, { Fragment } from 'react';
import Table from '../src/Components/Table';
import Navbar from '../src/Components/Navbar';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Table></Table>
    </Fragment>
  );
}

export default App;
