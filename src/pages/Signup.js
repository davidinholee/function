import React, { Component } from "react"
import { Navigate, Link } from 'react-router-dom'
import firebase from "../utils/firebase"
import "./styles/Signup.scss"
import earth from "../assets/earth.png"
import Logo from "../components/Logo"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.signup = this.signup.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOrgChange = this.handleOrgChange.bind(this)
    this.handleSponsorChange = this.handleSponsorChange.bind(this)
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      isOrg: false,
      isSponsor: false,
      redirect: false
    }
  }

  signup(e) {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((userCredentials) => {
      // Signed in
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("users").add({
        uid: userCredentials.user.uid,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        isOrg: this.state.isOrg,
        isSponsor: this.state.isSponsor
      });  
    })
    .catch((error)=>{console.log(error)})
    this.setState({ redirect: true })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleOrgChange(e) {
    this.setState({ isOrg: !this.state.isOrg })
  }

  handleSponsorChange(e) {
    this.setState({ isSponsor: !this.state.isSponsor })
  }

  render() {
    return (
      <div class="container-fluid">
        { this.state.redirect ? <Navigate to="/search"/> : null }
        <div class="row">
          <div class="left col-lg-4 px-6">
            <Logo />
            <h1 class="catchphrase pb-4 font-weight-normal text-white">We <b>power</b> every party, every shindig, every gathering by <b>connections.</b></h1>
            <div class="mx-auto mw-75 my-5 py-5 col-auto earth"><img class="mw-100" src={earth}></img></div>
          </div>
          <div class="right col-7">
            <h1 class="mt-5 pt-3 font-weight-normal">Create Account</h1>
            <form class="signup-form mt-5">
              <div class="form-group">
                <label for="firstName">First Name <p>*</p></label>
                <input value={this.state.firstName} onChange={this.handleChange} type="text" name="firstName"
                class="form-control" id="firstName" placeholder="Jane" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name <p>*</p></label>
                <input value={this.state.lastName} onChange={this.handleChange} type="text" name="lastName"
                class="form-control" id="lastName" placeholder="Doe" />
              </div>
              <div class="form-group">
                <label for="inputEmail">Email <p>*</p></label>
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                class="form-control" id="inputEmail" placeholder="jane@mail.com" />
              </div>
              <div class="form-group">
                <label for="inputPassword">Password <p>*</p></label>
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                class="form-control" id="inputPassword" placeholder="6+ characters" />
              </div>
              I'm a
              <div class="form-check">
                <input class="form-check-input" type="checkbox" onChange={this.handleOrgChange} id="isOrg" />
                <label class="form-check-label" for="org">
                    Organization team member
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" onChange={this.handleSponsorChange} id="isSponsor" />
                <label class="form-check-label" for="sponsor">
                    Sponsor team member
                </label>
              </div>
              <button type="submit" onClick={this.signup} className="btn btn-primary mt-4 py-2 px-3">Create account</button>
            </form>
            <div class="mt-4">
              <p class="already d-inline">Already have an account? </p><Link to="/login"><p class="text-primary d-inline">Login</p></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
