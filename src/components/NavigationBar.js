import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="Nav" id="nav-container">
        <ul id="desktop-nav">
          <li><Link to='/'>Home</Link></li>
        </ul>
        <ul id="mobile-nav">
          <li><a href="javascript:void(0);" onClick={() => this.clickMenu()}>Menu</a></li>
        </ul>
        <ul id="mobile-nav-items">
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
