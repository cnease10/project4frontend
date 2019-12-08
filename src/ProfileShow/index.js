import React, { Component } from 'react'
import {Button, Icon} from 'semantic-ui-react'
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
                <div>
                    <h1 key={date.id}>{date.name}</h1>
                    <h2>{date.description}</h2>
                    <Button className="buttonColor" onClick={() => this.props.openModal(date)}>Edit</Button>
                    <Button className="buttonColor" onClick={() => this.props.deleteDate(date.id)}>Delete</Button>
                </div>
            )
                
        })
        return (
            <div className="profilediv">
                <h1 className="mainHeader">My Date Ideas</h1>
                <div>
                    <Button className="buttonColor" onClick={() => this.props.openAdd()}><Icon name="sticky note outline"/>Create New</Button>
                </div>
                {dates}
            </div>
        )
    }
}

export default Profile