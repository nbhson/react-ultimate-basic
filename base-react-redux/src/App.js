import React from 'react';
import './App.scss';
import HomeComponentFunction from './components/HomeComponentFunction';
import NavbarComponent from './components/nav-bar/Navbar';

class App extends React.Component {
  // JSX
  render() {
    return (
      <React.Fragment>
        <NavbarComponent></NavbarComponent>
        <div className="container">
          <HomeComponentFunction></HomeComponentFunction>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
