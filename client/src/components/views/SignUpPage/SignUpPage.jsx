import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { signUpUser } from '../../../_action/user_action';
import { Form, Input, Button } from 'antd';
import useInput from '../../../hooks/useInput';

function SignUpPage(props) {
  const [{ Email, Password, ConfirmPassword }, onChange] = useInput({
    Email: '',
    Password: '',
    ConfirmPassword: '',
  });
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    console.log(Email, Password, ConfirmPassword);

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
        <Form.Item
          label="ConfirmPassword"
          name="ConfirmPassword"
          rules={[{ required: true, message: '비밀번호확인을 입력하세요.' }]}
        >
          <Input type="password" onChange={onChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default withRouter(SignUpPage);
