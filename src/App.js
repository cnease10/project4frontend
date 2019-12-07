import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import MainComponent from './MainComponent'



class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  } 
  logIn = () => {
  this.setState({
    loggedIn: true
    })
  }
  componentDidMount() {
    console.log(this.state.loggedIn)
    
  }
  componentDidUpdate() {
    console.log(this.state.loggedIn)
  }

  render () {
    return (
      <main className="appdiv">
        <Switch>
          <Route exact path ='/' render={(props) => <MainComponent {...props} login={this.state.loggedIn}/>}/>
          <Route exact path='/userlogin'  render={(props) => <Login {...props} logIn={this.logIn}/>}/>
          <Route exact path ='/newuser' render={(props) => <Register {...props} logIn={this.logIn}/>}/>
        </Switch>
      </main>
    )
  }
}
export default App;

