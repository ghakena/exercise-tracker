import React, { Component } from 'react'
import axios from 'axios';

class CreateUser extends Component {
  constructor(props) {
    super(props)

    this.state = { username: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username
    }

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
      

    this.setState({ username: '' })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={ this.state.username }
              onChange={ this.onChangeUsername }
            >
            </input>
          </div>
          <br />
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Add New User"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateUser