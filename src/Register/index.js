//register page for new users - use react router dom
import React, { Component } from 'react'
import {Form, Label, Button, Message} from 'semantic-ui-react'


class Register extends Component {
    constructor() {
        super();
        this.state= {
            username: '',
            password: ''
        }
    }
    //handle the form value change
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    //submit register form
    handleSubmit = async(e) => {
        e.preventDefault();
        const registerResponse = await fetch(process.env.REACT_APP_API_URL +'/api/v1/users/register',  {
            method: 'POST',
            body: JSON.stringify(this.state),
            credentials: 'include', //send a sesion cookie along with req
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const parsedResponse = await registerResponse.json();

        //validation
        if (parsedResponse.status.code === 200) {
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
                <h4>Register New User</h4>
                <Label >Username</Label>
                <Form.Input type="username" name="username" onChange={this.handleChange} required/>
                <Label >Password</Label>
                <Form.Input type="password" name="password" onChange={this.handleChange} required/>
                <Button type="submit">Sign Up</Button>
                { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
            </Form>
        )
    }
}

export default Register