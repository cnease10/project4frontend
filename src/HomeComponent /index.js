import React from 'react'


const HomeComponent = (props) => {
    //I need this route randomized to pull one out of the array
    const dates = props.dates.map((date) => {
        return(
                <h1 key={date.id}>{date.name}</h1>
        )
            
    })
    return(
        <div>
            <h1>DateRate</h1>
            <button  onClick={() => props.getDates()}>Find Date</button>
            {dates}
            <button onClick={() => {props.getProfile(); props.getLogin(); props.createdDates() }}>Profile</button>
            <p>Returned date value</p>
        </div>
    )
}

export default HomeComponent