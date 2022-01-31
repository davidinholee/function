import React, { Component } from "react"
import firebase from "../utils/firebase"
import { Navigate, Link } from "react-router-dom"
import Logo from "../components/Logo"
import "./styles/Login.scss"

class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email: "",
      password: "",
      redirect: false
    }
  }

  login(e) {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error)
    })
    this.setState({ redirect: true })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div class="main container-fluid">
        { this.state.redirect ? <Navigate to="/search"/> : null }
        <Logo />
        <div class="row">
          <div class="center col-md-4 mx-auto mt-5 pt-5">
            <h1 class="mt-5 pt-3 font-weight-normal">Log In</h1>
            <form class="signup-form mt-5">
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                class="form-control" id="inputEmail" placeholder="jane@mail.com" />
              </div>
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                class="form-control" id="inputPassword" placeholder="6+ characters" />
              </div>
              <button type="submit" onClick={this.login} className="btn btn-primary mt-3 py-2 px-3">Log In</button>
            </form>
            <div class="mt-4">
              <p class="already d-inline">Don't have an account? </p><Link to="/signup"><p class="link d-inline">Create one</p></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
