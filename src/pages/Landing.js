import firebase from "../utils/firebase"
import React, { Component } from "react"
import { Navigate } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    this.authListener()
  }
  
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ redirect: true });
      }
    })
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        {this.state.redirect ? <Navigate to="/search" /> : <Navigate to="/signup" /> }
      </div>
    );
  }
}

export default App;
