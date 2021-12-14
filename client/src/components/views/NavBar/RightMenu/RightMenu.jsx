import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function RightMenu(props) {
  const [current] = useState('');
  const user = useSelector((state) => state.user);

  const onLogOutHandler = () => {
    axios.post('/api/users/signOut').then((res) => {
      if (!res.data.signOutSuccess) {
        alert('로그아웃이 실패했습니다.');
      }
      localStorage.removeItem('userId');
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu
        className="large"
        mode={props.mode}
        selectedKeys={[current]}
        style={{ borderBottom: 'none' }}
      >
        <Menu.Item key="signIn">
          <Link to="/signIn">SignIn</Link>
        </Menu.Item>
        <Menu.Item key="signUp">
          <Link to="/signUp">SignUp</Link>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu
        className="small"
        mode={props.mode}
        selectedKeys={[current]}
        style={{ borderBottom: 'none' }}
      >
        <Menu.Item key="signOut">
          <Link to="/signIn" onClick={onLogOutHandler}>
            SignOut
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
