//need a form that creates a date for logged in users
import React, {Component} from 'react';
import {Form, Button, Header, Segment, Grid} from 'semantic-ui-react';

class AddDate extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: ''
        }
    }
    handleChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    render() {
        return (
            
                <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Segment textAlign="center" raised>
                            <Form onSubmit={(e) => this.props.addDate(e, this.state)}>
                                <h1>Add A Date!</h1>
                                <Header as="h2">Name:</Header>
                                <Form.Input focus type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
                                <Header as="h2" >Description:</Header>
                                <Form.Input focus type="text" name='description' value={this.state.description} onChange={this.handleChange}/>
                                <Button className="buttonColor" type="submit">Create Date</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
               </Grid> 
            
        )
    }
}

export default AddDate

//using a comment to update build of react app