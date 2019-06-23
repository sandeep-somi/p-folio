import React, { Component } from 'react';
import Introduction from '../components/landingPage/Introduction';
import Header from '../components/landingPage/Header';
import Development from '../components/landingPage/Development';
import Services from '../components/landingPage/Services';

class Main extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Introduction />
        <Development />
        <Services />
      </div>
    );
  }
}

export default Main;