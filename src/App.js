import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import List from "./List";
import New from "./New";
import Detail from "./Detail";

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
