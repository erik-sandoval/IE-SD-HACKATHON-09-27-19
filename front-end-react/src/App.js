import React from "../node_modules/react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GithubApi from "./Components/GithubApi";



function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Router>
        <Route path="/github-api" component={GithubApi}/>
      </Router>
    </div>
  );
}

export default App;
