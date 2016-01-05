import React, {Component} from 'react';
import './Header.scss';
import Link from '../Link';

class Header extends Component {
  render() {
    return (
      <div id="Header">
        <div className="Left-header">
          <div className="Logo" role="menu">Over<span className="color-1">Watching</span></div>
        </div>
        <div className="Right-header">
          <ul className="Nav" role="menu">
            <li className="Nav-item">
              <a className="Nav-link color-1" href="/" onClick={Link.handleClick}>Home</a>
            </li>
            <li className="Nav-item">
              <a className="Nav-link color-2" href="/personal" onClick={Link.handleClick}>Personal</a>
            </li>
            <li className="Nav-item">
              <a className="Nav-link color-3" href="/general" onClick={Link.handleClick}>General</a>
            </li>
            <li className="Nav-item">
              <a className="Nav-link color-4" href="/account" onClick={Link.handleClick}>Account</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
