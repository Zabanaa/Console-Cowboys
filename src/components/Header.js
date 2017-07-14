import React, { Component } from 'react';
import Background from './images/gist.gif'

let headerStyles = {
    backgroundImage: `url(${Background})`
}

class Header extends Component {

  render() {

    return (

      <div className="header">

        <header style={headerStyles} className="hero">

            <div className="wrapper">

                <a className="logo header__logo" href="/">

                    <p>
                        <span>Console</span>
                        <span>Cowboys</span>
                    </p>

                </a>

                <h1 className="header__tagline">
                    Browse DevOps positions in cyberspace's best jobs board.
                </h1>

                <a className="header__cta" href="/publish">
                    Post a job for just $79.
                </a>

            </div>

        </header>

      </div>

    );
  }
}

export default Header;
