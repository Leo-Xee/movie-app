import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

function LandingPage(props) {
  const onClickHandler = (e) => {
    e.preventDefault();

    axios.post('/api/users/signOut').then((res) => {
      console.log(res);
      if (res.data.signOutSuccess) {
        props.history.push('/signIn');
      } else {
        alert('로그아웃에 실패하였습니다.');
      }
    });
  };

  return (
    <div>
      <h1>시작페이지</h1>
      <button onClick={onClickHandler}>Sign Out</button>
    </div>
  );
}

export default withRouter(LandingPage);
