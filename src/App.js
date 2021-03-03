import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routers/Home";
import About from "./routers/About";
import Navigation from "./routers/Navigation";
import Detail from "./routers/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
