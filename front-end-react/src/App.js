import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Components/Search"
import "./App.css";
import Profile from "./Components/Profile";
import Error from './Pages/Error';

function App() {
  return (
    <div className='App'>
      {/* <header className='app-header'>IESD Hackday - GitHub API</header> */}
      <Router>
        <Route path="/profile" component={Profile}/>
        <Route path="/error" component={Error} />
        <Route path="/search" component={Search}/>
      </Router>
    </div>
  );
}

export default App;
