import React, { Component } from 'react'
import {Button, Icon, Grid, Container, Segment} from 'semantic-ui-react'
import './profile.css'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const dates = this.props.userdates.map((date) => {
            return(
            
                    <Segment className="segmentSpacer" raised>    
                    <h1 className="dateHeader"key={date.id}>{date.name}</h1>
                    <p>{date.description}</p>
                    <Button className="buttonColor" onClick={() => this.props.openModal(date)}>Edit</Button>
                    <Button className="buttonColor" onClick={() => this.props.deleteDate(date.id)}>Delete</Button>
                    </Segment>   
              
            )
                
        })
        return (
            <div className="profilediv">
                {/* <Grid columns={3}>
                   <Grid.Row>
                        <Grid.Column></Grid.Column>   
                        <Grid.Column> */}
                            <h1 className="mainHeader">My Date Ideas</h1>
                        {/* </Grid.Column>   
                        <Grid.Column> */}
                            <Button className="buttonColor" onClick={() => this.props.openAdd()}><Icon name="sticky note outline"/>Create New</Button>
                        {/* </Grid.Column>   
                   </Grid.Row>         
                </Grid> */}
                   
                <Grid >
                    
                           {dates} 
                    
                        
                </Grid>
                  
               
            </div>
        )
    }
}

export default Profile