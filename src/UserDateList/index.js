//need a page that shows a list of a user's created dates
//need ability to make a note on a created date
import React from 'react'


const UserDateList = (props) => {
    //get all userdates
    const dates = props.userdates.map((date) => {
        return(
                <h1 key={date.id}>{date.name}</h1>
        )
            
    })
    return(
        <div>
           HI I'M USERDATELIST {dates}
        </div>
    )
}

export default UserDateList