import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import News from "./components/News";

export class App extends Component {
  name = "Durgesh";
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
