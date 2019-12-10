import React, {Component} from 'react'
import HomeComponent from '../HomeComponent ';
import CreateDateComponent from '../CreateDateComponent'
import EditDateComponent from '../EditDateComponent'
import Profile from '../ProfileShow'
import './main.css'

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dates: [],
            userdates: [],
            dateEdit: {
                name: '',
                description: ''
            },
            editmodal: false,
            login: false,
            profile: false,
            add: false,
            randomdate: []
        }
        
    }
    //GET USER PROFILE COMPONENT
    getProfile = () => {
        if (this.props.login === true ) {
                this.setState({
                       login: true,
                        profile: true
          })
      } 
        else 
        console.log('must be logged in')
    }
    //GET ALL DATES
    getDates = async() => {
        try {
            const dates = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dates/', {
               credentials: 'include',
               method: 'GET' 
            });
            // console.log(dates)
            const parsedDates = await dates.json();
            const allDates = parsedDates.data
            const rand = Math.random();
            const totalDates = allDates.length;
            const randIndex = Math.floor(rand * totalDates)
            const randDate = allDates[randIndex]
            this.setState({
                dates: allDates,
                randomdate: randDate
            })
            // console.log(parsedDates.data);
            // console.log('hitting route')
        } catch (err) {
            // console.log(err);
        }

    }
    // GET ALL USER CREATED DATES
    getCreatedDates = async() => {
        // console.log('hitting created dates')
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
            // console.log(parsedDates.data);
            // console.log('hitting route')
            // this.getLoginPage()
        } catch (err) {
            console.log(err);
        }

    }
    //CREATE A USER DATE
    openAdd = () => {
       this.setState({
           add: true
       })
        console.log(this.state.add)
    }
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
                    add: false
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
            editmodal: true,
            dateEdit: {
                ...date
            }
        })
    }
    // CLOSE MODAL FOR EDIT
    close = async(e) => {
        e.preventDefault();
        console.log('hittingclose')
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
            console.log(newDateArray)
            this.setState({
                userdates: newDateArray,
                editmodal: false,
            })
        this.getCreatedDates();
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
        console.log(this.state.login)
        return(
            <React.Fragment className="maindiv">
                <HomeComponent logIn={this.state.login} randDate={this.state.randomdate} createdDates={this.getCreatedDates} getLogin={this.getProfile} getProfile={this.getProfile} getDates={this.getDates} dates={this.state.dates}/>
                 {this.state.add ? <CreateDateComponent userdates={this.state.userdates} addDate={this.addDate}/> : null }
                {this.state.login ?  <Profile openAdd={this.openAdd} userdates={this.state.userdates} openModal={this.openModal} deleteDate={this.deletedate}  /> : null}
                {this.state.editmodal ? <EditDateComponent boolean={this.state.editmodal} handleEdit={this.handleEdit} closeModal={this.close} dateEdit={this.state.dateEdit} /> : null }

            </React.Fragment>
        )
    }
}

export default MainComponent