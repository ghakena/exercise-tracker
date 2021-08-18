import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Trackerr</Link>
        <button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"    aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Exercises</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-exercise">Create Exercise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-user">Create User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar