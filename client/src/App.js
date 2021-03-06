import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { Container } from "./components/Grid";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./styles.css";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Container>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Container>
        </div>
      </Router>
    )
  };
};

export default App;