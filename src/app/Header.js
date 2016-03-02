import React from 'react';
import Navigation from './header/Navigation';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <Navigation />
      </header>
    );
  }
}

export default Header;
