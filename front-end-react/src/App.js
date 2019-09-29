import React from "react";
import "./App.css";

import Error from './Pages/Error';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Router>
        <Route component={Error} />
      </Router>
    </div>
  );
}

export default App;
