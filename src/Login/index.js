//need a log in page for current users - use react router dom

import React, { Component } from 'react'
import {Form, Label, Button, Message, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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
            <Form className="form" onSubmit={this.handleSubmit}>
                <h4>Sign In</h4>
                <Label>Username</Label>
                <Form.Input type="username" name="username" onChange={this.handleChange} required/>
                <Label>Password</Label>
                <Form.Input type="password" name="password" onChange={this.handleChange} required/>
                <Button type="submit"><Icon name="sign-in"/>Log In</Button> <br/>
                { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
                <Link to="/"><Icon name="arrow alternate circle left outline"/>Oops, take me back!</Link>
            </Form>
        )
    }
}

export default Login

