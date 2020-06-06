import React, { Fragment } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import Header from '../Layouts/Header/Header';
import './App.css';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container></Container>
    </Fragment>
  );
}

export default App;
