import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from 'reactstrap';

import './App.css';
import AppNavbar from './components/AppNavbar';
import GridLayout from './components/GridLayout';
import PeopleCard from './components/PeopleCard';
import HeaderSlider from './components/slider/HeaderSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Row>
          <Col md="6">
            <GridLayout />
          </Col>
          <Col md="6">
            <PeopleCard />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <HeaderSlider />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
