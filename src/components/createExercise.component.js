import React, { Component } from 'react';
import axios from 'axios';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDuration = this.onChangeDuration.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(res => {
        if(res.data.length > 0) {
          this.setState({ 
            users: res.data.map(user => user.username),
            username: res.data[0].username,
           })
        }
      })
  }
  
  onChangeUsername(e) {
    this.setState({ username: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value })
  }

  onChangeDuration(e) {
    this.setState({ duration: e.target.value })
  }

  onChangeDate(date) {
    this.setState({ date: date })
  }

  handleSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data))


    window.location = '/';
    // this.setState({ username: '', description: '', duration: '', date: '' })
  }


  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={ this.state.username }
              onChange={ this.onChangeUsername }
            >
              {
                this.state.users.map((user) => {
                  return <option key={user} value={user}>{ user }</option>
                })
              } 
            </select>
          </div>
          <div className="form-group">
              <label>Description: </label>
              <input
                required
                type="text"
                className="form-control"
                value={ this.state.description }
                onChange={ this.onChangeDescription }
              >
              </input>
          </div>
          <div className="form-group">
              <label>Duration (in minutes): </label>
              <input
                required
                type="number"
                className="form-control"
                value={ this.state.duration }
                onChange={ this.onChangeDuration }
              >
              </input>
          </div>
          <div className="form-group">
              <label>Date: </label>
              <div>
                <Datepicker 
                  selected={ this.state.date }
                  onChange={ this.onChangeDate }
                />
              </div>
          </div>
          <br />
          <div className="form-group">
              <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                
          </div>

        </form>
      </div>
    )
  }
}

export default CreateExercise