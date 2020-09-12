import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./List";
import New from "./New";
import Detail from "./Detail";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
