import React, { Component } from 'react'

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
                    <button onClick={() => this.props.openModal(date)}>Edit</button>
                    <button onClick={() => this.props.deleteDate(date.id)}>Delete</button>
                </div>
            )
                
        })
        return (
            <div>
                <h1>sup</h1>
                <div>
                    <button onClick={() => this.props.openAdd()}>Create New</button>
                </div>
                {dates}
            </div>
        )
    }
}

export default Profile