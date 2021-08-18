import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import CreateExercise from './components/createExercise.component';
import EditExercise from './components/editExercise.component';
import CreateUser from './components/createUser.component';
import Exercises from './components/exercises.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route exact path="/" component={ Exercises }/>
        <Route path="/create-exercise" component={ CreateExercise } />
        <Route path="/edit-exercise/:id" component={ EditExercise }/>
        <Route path="/create-user" component={ CreateUser } />
      </div>
    </Router>
  );
}

export default App;
