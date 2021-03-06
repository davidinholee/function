import './App.css';
import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Search from "./pages/Search"

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
