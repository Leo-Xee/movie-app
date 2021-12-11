import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../../_action/user_action';
import { withRouter } from 'react-router-dom';
import { Form, Button, Input } from 'antd';

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
    <div style={{ width: '400px', margin: '15% auto 0' }}>
      <Form onFinish={onSubmitHandler}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: '이메일을 입력하세요.' }]}
        >
          <Input type="email" onChange={onEmailHandler} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
        >
          <Input type="password" onChange={onPasswordHandler} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(SignInPage);
