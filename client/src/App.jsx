import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import SignInPage from './components/views/SignInPage/SignInPage';
import SignUpPage from './components/views/SignUpPage/SignUpPage';
import auth from './hoc/auth';

function App() {
  return (
    <Router>
      <Route exact path="/" component={auth(LandingPage, null)}></Route>
      <Route exact path="/signUp" component={auth(SignUpPage, false)}></Route>
      <Route exact path="/signIn" component={auth(SignInPage, false)}></Route>
    </Router>
  );
}

export default App;
