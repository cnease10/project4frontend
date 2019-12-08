//register page for new users - use react router dom
import React, { Component } from 'react'
import {Form, Label, Button, Message, Icon, Segment, Container, Grid} from 'semantic-ui-react'
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
            <div className="registerdiv">
                <Grid columns={3}>
                    <Grid.Row>

                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column></Grid.Column>
                        <Grid.Column>

                 <Segment textAlign="center" raised>
            <Form className="form" onSubmit={this.handleSubmit}>
                <Label >Username</Label>
                <Form.Input type="username" name="username" onChange={this.handleChange} required/>
                <Label >Password</Label>
                <Form.Input type="password" name="password" onChange={this.handleChange} required/>
                <Button type="submit">Sign Up</Button>
                <p>Have an Account? <Link to="/userlogin">Login</Link></p> 
                { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null}
            <Link to="/"><Button><Icon name="arrow alternate circle left outline"/>Back to Home</Button></Link>
            </Form>
            </Segment>
                        </Grid.Column>
                        <Grid.Column></Grid.Column>
                    </Grid.Row>
                </Grid>
                {/* <h4 className="mainHeader">Sign Up to Find or Plan Your Next Great Date Idea!</h4> */}
        
                
            
                {/* <img alt="couple walking down the street"className='photo, padding' src="https://images.unsplash.com/photo-1431037242647-4c2c27cb5bb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img alt="couple walking into forrest"className="photo" src="https://images.unsplash.com/photo-1440367850806-da68da359421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img alt="couple dancing" className="photo" src="https://images.unsplash.com/photo-1567373171107-244e1792695d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img alt="couple kissing" className="photo" src="https://images.unsplash.com/photo-1542351682-8453e2495f97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                 */}
          </div>  
        )
    }
}

export default Register