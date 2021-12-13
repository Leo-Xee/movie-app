import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import SignInPage from './components/views/SignInPage/SignInPage';
import SignUpPage from './components/views/SignUpPage/SignUpPage';
import NavBar from './components/views/NavBar/NavBar';
import auth from './hoc/auth';
import MovieDetails from './components/common/MovieDetails/MovieDetails';

function App(props) {
  return (
    <>
      <NavBar />
      <div>
        <Route exact path="/" component={auth(LandingPage, null)}></Route>
        <Route exact path="/signUp" component={auth(SignUpPage, false)}></Route>
        <Route exact path="/signIn" component={auth(SignInPage, false)}></Route>
        <Route
          exact
          path="/movie/:movieId"
          component={auth(MovieDetails, null)}
        ></Route>
      </div>
    </>
  );
}

export default App;
