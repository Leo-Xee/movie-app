import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_action/user_action';

export default function auth(SpecificComponent, option, admin = null) {
  /**
   *  option
   *    null: 모두 접근가능 (Landing)
   *    true: 로그인 한 사람만 접근 가능
   *    false: 로그인 한 사람은 접근 불가(SignIn, SignUp)
   */
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then((res) => {
        // 로그인 안한 유저
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/signIn');
          }
          // 로그인 한 유저
        } else {
          // 관리자 페이지인데 관리자가 아닌 경우
          if (admin && !res.payload.isAdmin) {
            props.history.push('/');
          } else {
            props.history.push('/');
          }
        }
      });
    }, [dispatch, props.history]);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
