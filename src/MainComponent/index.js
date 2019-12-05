import React, {Component} from 'react'
import HomeComponent from '../HomeComponent ';
import CreateDateComponent from '../CreateDateComponent'
import EditDateComponent from '../EditDateComponent'


class MainComponent extends Component {
    constructor() {
        super();

        this.state = {
            dates: [],
            userdates: [],
            dateEdit: {
                name: '',
                description: ''
            }
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
                    userdates: [...this.state.userdates, parsedResponse.data],
                    
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
    //EDIT DATE
    handleEdit = (e) => {
        this.setState({
            dateEdit: {
                ...this.state.dateEdit, [e.currentTarget.name]: e.currentTarget.value
            }
        })
    }
    //OPEN MODAL FOR EDIT
    openModal = (date) => {
        console.log(date)
        this.setState({
            // showModal: true,
            dateEdit: {
                ...date
            }
        })
    }
    // CLOSE MODAL FOR EDIT
    close = async(e) => {
        e.preventDefault();

        try{
            const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dates/' + this.state.dateEdit.id, {
                method: 'PUT',
                body: JSON.stringify(this.state.dateEdit),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const editResponseParsed = await editResponse.json();
            const newDateArray = this.state.userdates.map((date) => {
                if (date.id === editResponseParsed.data.id) {
                    date = editResponseParsed.data
                }
                return date;
            })
            this.setState({
                userdates: newDateArray,
                // showModal: false,
            })
            this.setState({ state: this.state });
        } catch(err) {
            console.log(err)
        }
    }
    
    render() {
        return(
            <div>
                {/* <EditDateComponent handleEdit={this.handleEdit} openModal={this.openModal} closeModal={this.close} dateEdit={this.state.dateEdit} /> */}
                <CreateDateComponent userdates={this.state.userdates} addDate={this.addDate}/>
                <HomeComponent getDates={this.getDates} dates={this.state.userdates}/>
            </div>
        )
    }
}

export default MainComponent