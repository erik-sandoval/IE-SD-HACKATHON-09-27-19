import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";



import Error from './Pages/Error';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Router>
        <Route path="/profile" component={Profile}/>
      </Router>
    </div>
  );
}

export default App;
