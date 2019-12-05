import React, {Component} from 'react'
import HomeComponent from '../HomeComponent ';
import Login from '../Login'
import Register from '../Register'
class MainComponent extends Component {
    constructor() {
        super();

        this.state = {
            dates: []
        }
        
    }
    getDates = async() => {
        try {
            const dates = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dates/', {
               credentials: 'include',
               method: 'GET' 
            });
            console.log(dates)
            const parsedDates = await dates.json();
            this.setState({
                dates: parsedDates.data,
            })
            console.log(parsedDates.data);
            console.log('hitting route')
        } catch (err) {
            console.log(err);
        }

    }
    render() {
        return(
            <div>

                <HomeComponent getDates={this.getDates} dates={this.state.dates}/>
            </div>
        )
    }
}

export default MainComponent