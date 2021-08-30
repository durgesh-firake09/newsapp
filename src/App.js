import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import Homepage from "./components/Homepage";

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  apiKey = "47a860f74f4b455f83529753d349f0bb";
  state = {
    progress: 0,
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={4}
            className="loadingBar"
          />
          <Switch>
            <Route exact path="/home">
              <Homepage setProgress={this.setProgress} key="homepage" />
            </Route>
            <Route exact path="/top-headlines/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                category="general"
                pagesize="20"
              />
            </Route>
            <Route exact path="/about">
              <About setProgress={this.setProgress} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/top-headlines/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                category="entertainment"
                pagesize="20"
              />
            </Route>
            <Route exact path="/top-headlines/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                category="health"
                pagesize="20"
              />
            </Route>
            <Route exact path="/top-headlines/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                category="science"
                pagesize="20"
              />
            </Route>
            <Route exact path="/top-headlines/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                category="technology"
                pagesize="20"
              />
            </Route>
            <Route exact path="/top-headlines/general">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                category="general"
                pagesize="20"
              />
            </Route>
            <Route exact path="/top-headlines/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                category="sports"
                pagesize="20"
              />
            </Route>
            <Route exact path="/top-headlines/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                category="business"
                pagesize="20"
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
