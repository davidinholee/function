import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./styles/Navbar.scss"

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light transparent">
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="search-bar form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-3" type="search" placeholder="Search events or orgs" aria-label="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-icon" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </form>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/orgs"><p class="text-primary d-inline">My organizations</p></Link>
            </li>
            <li class="nav-item">
              <Link to="/orgs"><p class="text-primary d-inline">My events</p></Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          
        </div>
      </nav>
    )
  }
}

export default Navbar
