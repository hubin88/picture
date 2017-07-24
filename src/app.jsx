import React, { Component } from 'react';
import Container from './views/container/container';
import './css/main.scss'; // import global css style

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Container />
      </div>
    );
  }
}
