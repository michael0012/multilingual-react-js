import React from "react";
import Routing from './Routing';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Switch>
        <Route component={Routing}/>
      </Switch>
    </Router>
  );
}

export default App;
