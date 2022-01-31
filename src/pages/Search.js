import React, { Component } from "react"
import firebase from "../utils/firebase"
import { Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"

class Search extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.state = {
      redirect: false
    }
  }

  logout() {
    firebase.auth().signOut();
    this.setState({ redirect: true })
  }

  render() {
    return (
      <div class="container">
        { this.state.redirect ? <Navigate to="/" /> : null }
        <Navbar />
        <h1>You are home</h1>
        <button onClick={this.logout} style={{marginLeft: '25px'}} className="btn btn-success">Logout</button>
      </div>
    )
  }
}

export default Search
