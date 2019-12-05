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
    
  }

  render () {
    return (
      <main >
        <Switch>
          <Route exact path ='/' render={(props) => <MainComponent {...props} adminlogged={this.state.loggedIn}/>}/>
          <Route exact path='/userlogin'  render={(props) => <Login {...props} logIn={this.logIn}/>}/>
          <Route exact path ='/newuser' Component={Register} />
        </Switch>
      </main>
    )
  }
}
export default App;

