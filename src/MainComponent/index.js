import React, {Component} from 'react'
import HomeComponent from '../HomeComponent ';
import CreateDateComponent from '../CreateDateComponent'
import EditDateComponent from '../EditDateComponent'
import UserDateList from '../UserDateList'

class MainComponent extends Component {
    constructor() {
        super();

        this.state = {
            dates: [],
            userdates: [],
            dateEdit: {
                name: '',
                description: ''
            },
            editmodal: false,
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
    // GET ALL USER CREATED DATES
    getCreatedDates = async() => {
        try {
            const dates = await fetch(process.env.REACT_APP_API_URL + '/api/v1/creates/', {
               credentials: 'include',
               method: 'GET' 
            });
            console.log(dates)
            const parsedDates = await dates.json();
            this.setState({
                userdates: parsedDates.data,
            })
            console.log(parsedDates.data);
            console.log('hitting route')
        } catch (err) {
            console.log(err);
        }

    }
    //CREATE A USER DATE
    addDate = async(e, date) => {
        e.preventDefault();
        try {
            const dateResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/creates/', {
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
    //EDIT USER DATE
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
            editModal: true,
            dateEdit: {
                ...date
            }
        })
    }
    // CLOSE MODAL FOR EDIT
    close = async(e) => {
        e.preventDefault();

        try{
            const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/creates/' + this.state.dateEdit.id, {
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
                editModal: false,
            })
            this.setState({ state: this.state });
        } catch(err) {
            console.log(err)
        }
    }

    //DELETE USER DATE
    deletedate = async(dateId) => {
        const deleteResponse = await fetch(process.env.REACT_APP_API_URL +'/api/v1/creates/' + dateId,  {
            method: 'DELETE',
            credentials: 'include'
        });
        const deleteResponseParsed = await deleteResponse.json();
        console.log(deleteResponseParsed)
        if (deleteResponseParsed.status.code === 200) {
            this.setState({
                userdates: this.state.userdates.filter((date) => date.id !== dateId),
                })
        console.log('hitting delete after set state')
        } else {
            alert('there is an issue');
        }
    }
    
    render() {
        return(
            <div>
                {this.state.editmodal ? <EditDateComponent handleEdit={this.handleEdit} openModal={this.openModal} closeModal={this.close} dateEdit={this.state.dateEdit} /> : null }
                <CreateDateComponent userdates={this.state.userdates} addDate={this.addDate}/>
                <HomeComponent getDates={this.getDates} dates={this.state.dates}/>
                <UserDateList openModal={this.openModal} deleteDate={this.deletedate} userdates={this.state.userdates}/>
            </div>
        )
    }
}

export default MainComponent