import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import SignInPage from './components/views/SignInPage/SignInPage';
import SignUpPage from './components/views/SignUpPage/SignUpPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/signUp" component={SignUpPage}></Route>
      <Route exact path="/signIn" component={SignInPage}></Route>
    </Router>
  );
}

export default App;
