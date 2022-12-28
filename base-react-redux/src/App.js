import React from 'react';
import './App.scss';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/nav-bar/Navbar';

class App extends React.Component {
  // JSX
  render() {
    return (
      <React.Fragment>
        <NavbarComponent></NavbarComponent>
        <div className="container">
          <HomeComponent></HomeComponent>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
