import React, { Fragment } from 'react';
import { Container } from 'react-materialize';
import Header from '../Layouts/Header/Header';
import Home from '../Layouts/Home/Home';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Home />
      </Container>
    </Fragment>
  );
}

export default App;
