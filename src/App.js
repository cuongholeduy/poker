import React, { Component, lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

// lazy routing

/*
  const Home = lazy(() => import("./pages/Home"));
  const Game = lazy(() => import("./pages/Game"));

  <BrowserRouter>
    <Switch>
      <Route path="/" render={() => {
        return (
          <Suspense fallback={//loading}>
            <Home />
          </Suspense>
        )    
      } />
    </Switch>
  </BrowserRouter>

*/
