//need a log in page for current users - use react router dom

import React, { Component } from 'react'
import {Form, Label, Button, Message, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './login.css'
class Login extends Component {
    constructor() {
        super();
        this.state= {
            username: '',
            password: '',

        }
    }
    //handle the form value change
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    //submit login form
    handleSubmit = async(e) => {
        console.log('user submit being hit')
        e.preventDefault();
        const loginResponse = await fetch(process.env.REACT_APP_API_URL +'/api/v1/users/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            credentials: 'include', //send a sesion cookie along with req
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();
        console.log(parsedResponse)
        //validation
        if (parsedResponse.status.code === 200) {
            console.log('success');
            this.props.logIn();
            console.log(this.props.logIn)
            this.props.history.push('/');
            //programatically change url using react-router
        } else {
            this.setState( {
                errorMsg: parsedResponse.status.message
            });
        }
    }
    render() {
        return (
            <div className="logindiv">
            <Form className="form" onSubmit={this.handleSubmit}>
                <h4 textAlign="center">Log in to LOVE Your Next Date!</h4>
                <Label>Username</Label>
                <Form.Input type="username" name="username" onChange={this.handleChange} required/>
                <Label>Password</Label>
                <Form.Input type="password" name="password" onChange={this.handleChange} required/>
                <Button type="submit"><Icon name="sign-in"/>Log In</Button> 
                <Link to="/"><Icon name="arrow alternate circle left outline"/>Oops, take me back!</Link>
                { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
            </Form>
                <img alt="couple walking down the street"className='photo, padding' src="https://images.unsplash.com/photo-1556825410-c8fb2ae4f590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img alt="couple walking into forrest"className="photo" src="https://images.unsplash.com/photo-1440367850806-da68da359421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img alt="couple dancing" className="photo" src="https://images.unsplash.com/photo-1567373171107-244e1792695d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img alt="couple kissing" className="photo" src="https://images.unsplash.com/photo-1542351682-8453e2495f97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                
            </div>
        )
    }
}

export default Login

