import React, { Component } from 'react';
import './Header.css'
import Background from '../images/gist.gif'

let headerStyles = {
    backgroundImage: `url(${Background})`
}

class Header extends Component {

  render() {

    return (

      <div className="header">

        <header style={headerStyles} className="hero">
        </header>

      </div>

    );
  }
}

export default Header;

