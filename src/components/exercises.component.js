import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

const Exercise = (props) => {
  return (<tr>
    <td>{ props.exercise.username }</td>
    <td>{ props.exercise.description }</td>
    <td>{ props.exercise.duration }</td>
    <td>{ props.exercise.date.substring(0,10) }</td>
    <td>
        <Link to={"/edit-exercise/" + props.exercise._id} className="btn btn-primary">edit</Link> | 
        <input
          value="delete"
          onClick={ () => { props.deleteExercise(props.exercise._id) } }
          className="btn btn-danger"
        >
        </input> 
    </td>
  </tr>)
}

class Exercises extends Component {
  constructor(props) {
    super(props)
    
    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { exercises: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        this.setState({ exercises: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(res => { console.log(res.data) })
    
    this.setState({ 
      exercises: this.state.exercises.filter( el => el._id !== id ) 
    })
      
  }

  exerciseList() {
    return this.state.exercises.map(currentExercise => {
      return <Exercise exercise={ currentExercise } deleteExercise={ this.deleteExercise } key={ currentExercise._id } />
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <td>Username</td>
              <td>Description</td>
              <td>Duration</td>
              <td>Date</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Exercises