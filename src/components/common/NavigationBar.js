import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.clickMenu = this.clickMenu.bind(this);
    this.state = {
      menuOpen: false,
      currentUser: null
    };
  }
  componentDidMount() {
    this.mobileNav = document.getElementById('nav-container');
    this.mobileNavItems = document.getElementById('mobile-nav-items');
  }
  clickMenu() {
    this.setState({ menuOpen: !this.state.menuOpen }, () => {
      this.mobileNav.style.height = this.state.menuOpen ? 'auto' : '10vh';
      this.mobileNavItems.style.display = this.state.menuOpen ? 'block' : 'none';
    });
  }
  render() {
    return (
      <nav className="Nav" id="nav-container">
        <ul id="desktop-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/favourites'>Favourites</Link></li>
        </ul>
        <ul id="mobile-nav">
          <li><a href="javascript:void(0);" onClick={this.clickMenu}>Menu</a></li>
        </ul>
        <ul id="mobile-nav-items">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/favourites'>Favourites</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
