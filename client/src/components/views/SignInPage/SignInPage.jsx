import React from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../../_action/user_action';
import { withRouter } from 'react-router-dom';
import { Form, Button, Input } from 'antd';
import useInput from '../../../hooks/useInput';

function SignInPage(props) {
  const [{ Email, Password }, onChange] = useInput({
    Email: '',
    Password: '',
  });
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    let body = {
      email: Email,
      password: Password,
    };

    dispatch(signInUser(body)).then((res) => {
      if (res.payload.signInSuccess) {
        localStorage.setItem('userId', res.payload.userId);
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
          name="Email"
          rules={[{ required: true, message: '이메일을 입력하세요.' }]}
        >
          <Input type="email" onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="Password"
          rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
        >
          <Input type="password" onChange={onChange} />
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
