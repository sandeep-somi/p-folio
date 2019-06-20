import React, { Component } from 'react';
import { Header, Introduction, Development } from '../components';

class Main extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Introduction />
        <Development />
      </div>
    );
  }
}

export default Main;