import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../../_action/user_action';
import { withRouter } from 'react-router-dom';

function SignInPage(props) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(signInUser(body)).then((res) => {
      if (res.payload.signInSuccess) {
        props.history.push('/');
      } else {
        alert('이메일이나 비밀번호가 일치하지 않습니다.');
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="Email">Email</label>
        <input
          name="Email"
          type="email"
          value={Email}
          onChange={onEmailHandler}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          name="Password"
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        />
        <br />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default withRouter(SignInPage);
