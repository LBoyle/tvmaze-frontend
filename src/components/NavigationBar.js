import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      currentUser: null
    };
  }
  componentDidMount() {
    this.menuBar = document.getElementById('nav-container');
    this.menuBarItems = document.getElementById('mobile-nav-items');
  }
  clickMenu() {
    this.setState({ menuOpen: !this.state.menuOpen }, () => {
      console.log(this.state);
      this.menuBar.style.height = this.state.menuOpen ? 'auto' : '10vh';
      this.menuBarItems.style.display = this.state.menuOpen ? 'block' : 'none';
    });

  }
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
