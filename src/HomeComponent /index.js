import React from 'react'
import {Button} from 'semantic-ui-react'

const HomeComponent = (props) => {
    //I need this route randomized to pull one out of the array
    // const date = props.randDate.map((date) => {
    //     return(
    //             <h1 key={date.id}>{date.name}</h1>
    //     )
            
    // })
    return(
        <div>
            
            <h1>DateRate</h1>
            <p>Do you ever get tired of trying to come up with date ideas? <br/>
                DateRate is here to help! <br/>
                Click Find Date to get a fun date idea.
            </p>
            <Button  onClick={() => props.getDates()}>Find Date</Button>
            <Button onClick={() => {props.getProfile(); props.getLogin(); props.createdDates() }}>Profile</Button>
            <h1>{props.randDate.name}</h1>
            <h2>{props.randDate.description}</h2>
        </div>
    )
}

export default HomeComponent