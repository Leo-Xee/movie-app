import React from 'react';
import 'antd/dist/antd.css';
import RightMenu from './RightMenu/RightMenu';
import LeftMenu from './LeftMenu/LeftMenu';

import logo from '../../../assets/img/logo.png';
import './NavBar.css';

export default function NavBar(props) {
  return (
    <nav className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu_container">
        <div className="left_menu">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="right_menu">
          <RightMenu mode="horizontal" />
        </div>
      </div>
    </nav>
  );
}
