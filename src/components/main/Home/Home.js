import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <div className="home-container">
          <p>Hi, I'm Joe.  </p>
          <div className="img-container">
            {/* selfie is in here */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
