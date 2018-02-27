import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    name:'home',
    to:'/',
    exact:true
  },
  {
    name:'manage product',
    to:'/product-list',
    exact:false
  }
];
const MenuLink = ({label, to, activeOnlyWhenExact}) =>{
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match})=>{
        var active=match ? 'active' : '';
        return (
          <li className={active}>
          <Link to={to}>
            {label}
          </Link>
          </li>
          );
      }}
    />
  );
};


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
              {this.showMenus(menus)}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  showMenus = (menus) => {
    var result = '';
    if(menus.length > 0) {
      
      result = menus.map((menu, index) => {
        return (
          <MenuLink 
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
           />
        );
      });
    }
    return result;
  }
}

export default Menu;
