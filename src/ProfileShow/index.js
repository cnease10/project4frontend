import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
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
                    <Button onClick={() => this.props.openModal(date)}>Edit</Button>
                    <Button onClick={() => this.props.deleteDate(date.id)}>Delete</Button>
                </div>
            )
                
        })
        return (
            <div className="profilediv">
                <h1>Your dates</h1>
                <div>
                    <Button onClick={() => this.props.openAdd()}>Create New</Button>
                </div>
                {dates}
            </div>
        )
    }
}

export default Profile