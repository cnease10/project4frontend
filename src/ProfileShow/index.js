import React, { Component } from 'react'
import {Button, Icon, Grid, Segment} from 'semantic-ui-react'
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
                    <Button className="buttonColor" onClick={() => this.props.openModal(date)}><Icon name="edit outline"/>Edit</Button>
                    <Button className="buttonColor" onClick={() => this.props.deleteDate(date.id)}><Icon name="delete"/>Delete</Button>
                    </Segment>   
              
            )
                
        })
        return (
            <React.Fragment className="profilediv">
               
                <h1 className="mainHeader">My Date Ideas <Icon name="idea"/></h1>
                      
                <Button className="buttonColorCenter" onClick={() => this.props.openAdd()}><Icon name="sticky note outline"/>Create New</Button>
                     
                   
                <Grid >
                    
                {dates} 
                    
                        
                </Grid>
                
               
            </React.Fragment>
        )
    }
}

export default Profile