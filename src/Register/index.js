//register page for new users - use react router dom
import React, { Component } from 'react'
import {Form, Label, Button, Message, Icon, Segment, Grid, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


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
            <React.Fragment className="logindiv">
 
                        
                        <Segment placeholder raised purple>
                            <Grid columns={2} stackable textAlign='center'>
                            <Divider vertical></Divider>

                            <Grid.Row verticalAlign='middle'>
                            <Grid.Column >
                                <img alt="couple holding hand"className="loginPic" src="https://images.unsplash.com/photo-1564045288780-5c11658fefa3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
                            <h4 className="whiteh4">Find-A-Date<Icon name="checked calendar"/></h4>
                            </Grid.Column>

                            <Grid.Column>
                                <Form className="form" onSubmit={this.handleSubmit}>
                                    <Label>Username</Label>
                                        <Form.Input type="username" name="username" onChange={this.handleChange} required/>
                                    <Label>Password</Label>
                                        <Form.Input type="password" name="password" onChange={this.handleChange} required/> 
                                    <Button className="buttonColor"type="submit">Sign Up</Button>
                                    <p>Already a User? <Link to="/userlogin">Login</Link></p>
                                        { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
                                     <Link to="/"><Button className="buttonColor" ><Icon name="arrow alternate circle left outline"/>Back to Home</Button></Link>
                                </Form>
                            </Grid.Column>
                            </Grid.Row>
                            </Grid>
                        </Segment>   
            
          </React.Fragment>  
        )
    }
}

export default Register