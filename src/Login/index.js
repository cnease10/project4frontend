//need a log in page for current users - use react router dom

import React, { Component } from 'react'
import {Form, Label, Button, Message, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super();
        this.state= {
            email: '',
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
        e.preventDefault();
        const loginResponse = await fetch(process.env.REACT_APP_API_URL +'/api/v1/admins/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            credentials: 'include', //send a sesion cookie along with req
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await loginResponse.json();

        //validation
        if (parsedResponse.status.code === 200) {
            this.props.logIn();
            console.log('success');
            this.props.logIn();
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
                <Label className="ui colorthree header">Email</Label>
                <Form.Input type="email" name="email" onChange={this.handleChange} required/>
                <Label className="ui colorthree header">Password</Label>
                <Form.Input type="password" name="password" onChange={this.handleChange} required/>
                <Button type="submit" className="ui color1 button"><Icon name="sign-in"/>Log In</Button> <br/>
                { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
                <Link className="ui color1 button" to="/"><Icon name="arrow alternate circle left outline"/>Oops, take me back!</Link>
            </Form>
        )
    }
}

export default Login

