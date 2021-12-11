import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

export default function LeftMenu(props) {
  return (
    <div>
      <Menu mode={props.mode} style={{ borderBottom: 'none' }}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="favorite">
          <Link to="favorite">Favorite</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
