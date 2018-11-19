import React, { Component } from 'react';
import './App.css';
import CurriculumVitae from './components/curriculum-vitae';
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
      <CurriculumVitae></CurriculumVitae>
      </Container>
    );
  }
}

export default App;
