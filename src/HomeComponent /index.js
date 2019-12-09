import React from 'react'
import {Button, Container, Icon} from 'semantic-ui-react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './home.css'

const HomeComponent = (props) => {
  
    return(
        
        <div className='homediv'>
            <Navbar  expand="md" className="navcolor">
                <Navbar.Brand className="brand" href="#home">Find-A-Date<Icon name="checked calendar"/></Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
            
                 <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link id="navitem" href="/"><Icon name="home"></Icon>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown id="navitem" title="Users" >
                        <NavDropdown.Item  id="navitem" href="/userlogin"><Icon name="sign-in"/>Login</NavDropdown.Item>
                        <NavDropdown.Item  id="navitem" href="/newuser"><Icon name="add user"/>Register</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
                <Button className="buttonColor"onClick={() => {props.getProfile(); props.getLogin(); props.createdDates() }}><Icon name="list"/>My Dates</Button>
            </Navbar>
            <h1 className="mainHeader">Find-A-Date<Icon name="checked calendar"/></h1>
            <p className="catchphrase">Do you ever get tired of trying to come up with date ideas? <br/>
                Find-A-Date is here to help! <br/>
                Click Find A Date Idea to get a fun date idea.
            </p>
            <Container textAlign="center">
            <Button className="buttonColor"onClick={() => props.getDates()}><Icon name="idea"/>Find A Date Idea</Button>
            </Container>
            {/* <Button className="buttonColor"onClick={() => {props.getProfile(); props.getLogin(); props.createdDates() }}>My Dates</Button> <br/>
            <Button className="buttonColor"onClick={() => props.getDates()}>Find Date Idea</Button> */}
            
            <Container className="dateCont"textAlign='center'>
            <h1 className="genDateName">{props.randDate.name}</h1>
            <h2 className="genDateDesc">{props.randDate.description}</h2>
            </Container>
            {/* <Button className="buttonColor"onClick={() => {props.getProfile(); props.getLogin(); props.createdDates() }}>My Dates</Button>  */}
        </div>
    )
}

export default HomeComponent

// const popover = (
//     <Popover id="popover-basic">
//       <Popover.Title as="h3">Popover right</Popover.Title>
//       <Popover.Content>
//         And here's some <strong>amazing</strong> content. It's very engaging.
//         right?
//       </Popover.Content>
//     </Popover>
//   );
  
//   const Example = () => (
//     <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//       <Button variant="success">Click me to see</Button>
//     </OverlayTrigger>
//   );