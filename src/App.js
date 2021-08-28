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
              <News category="general" pagesize="20" />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" category="entertainment" pagesize="20" />
            </Route>
            <Route exact path="/health">
              <News key="health" category="health" pagesize="20" />
            </Route>
            <Route exact path="/science">
              <News key="science" category="science" pagesize="20" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" category="technology" pagesize="20" />
            </Route>
            <Route exact path="/general">
              <News key="general" category="general" pagesize="20" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" category="sports" pagesize="20" />
            </Route>
            <Route exact path="/business">
              <News key="business" category="business" pagesize="20" />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
