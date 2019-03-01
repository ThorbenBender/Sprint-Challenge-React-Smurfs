import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchSmurf();
  }
  fetchSmurf = () => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => this.setSmurf(res.data))
    .catch(error => this.setError(error))
    .finally(this.stoppedLoading);
  }

  setSmurf = smurfs => {
    this.setState({ smurfs: smurfs});
  }
  setError = error => {
    this.setState({ error: error });
  }

  stoppedLoading = () => {
    this.setState({ loading: false});
  }

  startedLoading = () => {
    this.setState({ loading: true});
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <NavBar />}></Route>
        <Route path="/smurf-form" render={() => <SmurfForm />}></Route>
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs}/>}></Route>
      </div>
    );
  }
}

export default App;
