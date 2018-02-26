import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="">Call API</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="">Home</a></li>
              <li><a href="">Page 2</a></li>
              <li><a href="">Page 3</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
