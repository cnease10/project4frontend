import React, {Component} from 'react'
import HomeComponent from '../HomeComponent ';
import CreateDateComponent from '../CreateDateComponent'
class MainComponent extends Component {
    constructor() {
        super();

        this.state = {
            dates: []
        }
        
    }
    //GET ALL DATES
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
    //CREATE A DATE
    addDate = async(e, date) => {
        e.preventDefault();
        try {
            const dateResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dates/', {
                method: 'POST',
                body: JSON.stringify(date),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const parsedResponse = await dateResponse.json();
            if (parsedResponse.status.code === 200) {
                this.setState({
                    dates: [...this.state.dates, parsedResponse.data],
                    
                })
                console.log('hitting add date')
                this.setState({ state: this.state });
            } else {
                alert('we have an error')
            }
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return(
            <div>
                <CreateDateComponent dates={this.state.dates} addDate={this.addDate}/>
                <HomeComponent getDates={this.getDates} dates={this.state.dates}/>
            </div>
        )
    }
}

export default MainComponent