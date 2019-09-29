import React,{useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Components/Search"
import "./App.css";
import Profile from "./Components/Profile";
import Error from './Pages/Error';

function App(props) {
const [input, setInput] = useState("")
let username = ""

const handleChange = (e) => {
    setInput(e.target.value)
}

const onSubmit = (e) => {
  e.preventDefault();

  username = input

  props.history.push({
    pathname: '/profile',
    input})
}

console.log(props)
console.log(username)
  return (
    <div className='App'>
      <header className='app-header'>IESD Hackday - GitHub API</header>
      
        <Route path="/profile" render={(props) => <Profile {...props} username={username}/>}/>
        <Route exact path="/" render={(props) => <Search {...props} onSubmit={onSubmit} handleChange={handleChange}/>}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/error" component={Error} />
    </div>
  );
}

export default withRouter(App);
