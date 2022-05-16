// Write a program to pass values to child using context?
// How to pass data between sibling components using react router?
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import First from './components/First';
import Second from './components/Second';
function App() {
  
  return  (
    <>

  <Router>
<Switch>
<Route path="/" component={First} exact/>
  
<Route path="/second" component={Second} />
</Switch>

</Router>
  </>
    );
}

export default App;
