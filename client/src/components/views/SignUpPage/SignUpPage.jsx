import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { signUpUser } from '../../../_action/user_action';

function SignUpPage(props) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    }

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(signUpUser(body)).then((res) => {
      if (res.payload.signUpSuccess) {
        props.history.push('/signIn');
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
        <label htmlFor="ConfirmPassword">ConfirmPassword</label>
        <input
          name="ComfirmPassword"
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
}
export default withRouter(SignUpPage);
