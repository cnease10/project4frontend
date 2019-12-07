import React from 'react'
import {Button, Container} from 'semantic-ui-react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './home.css'

const HomeComponent = (props) => {
    //I need this route randomized to pull one out of the array
    // const date = props.randDate.map((date) => {
    //     return(
    //             <h1 key={date.id}>{date.name}</h1>
    //     )
            
    // })
    return(
        
        <div className='homediv'>
            <Navbar  expand="lg" className="navcolor">
                <Navbar.Brand href="#home">Find-A-Date</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
            
                 <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Users" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/userlogin">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/newuser">Register</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1 text-align="center">Find-A-Date</h1>
            <p>Do you ever get tired of trying to come up with date ideas? <br/>
                Find-A-Date is here to help! <br/>
                Click Find Date to get a fun date idea.
            </p>
            <Button className="buttonColor"onClick={() => props.getDates()}>Find Date Idea</Button>
            <Button className="buttonColor"onClick={() => {props.getProfile(); props.getLogin(); props.createdDates() }}>My Dates</Button>
            <Container textAlign='center'>
            <h1>{props.randDate.name}</h1>
            <h2>{props.randDate.description}</h2>
            </Container>
        </div>
    )
}

export default HomeComponent