import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import LogoImage from "./img.png";
export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-lg bg-primary fixed-top">
          <div className="container">
          <Link to="/" className="navbar-brand">
  <img src={LogoImage} alt="Logo" style={{ marginRight: '8px' }} /> {/* Adjust the path and styling as needed */}
  <span>MOVIE FINDER</span>
</Link>


              <ul class="navbar-nav ml-auto">
                <li className='nav-item'>
                  <a className='nav-link' href=""><i className="fab fa-github"></i></a>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
