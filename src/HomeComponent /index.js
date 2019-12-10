import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import {Navbar, Nav, NavDropdown, Carousel, OverlayTrigger, Tooltip} from 'react-bootstrap'
import './home.css'

const HomeComponent = (props) => {

      function renderTooltip(props) {
        return <Tooltip {...props}>Login to See Your Dates</Tooltip>;
      }
    return(
        
        <React.Fragment className='homediv'>
             
            <Navbar  expand="md" className="navcolor">
                <Navbar.Brand className="brand" href="#home">Find-A-Date<Icon name="checked calendar"/></Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
            
                 <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className="blue"id="navitem" href="/"><Icon name="home"></Icon>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown className="blue" id="navitem" title="Users" >
                        <NavDropdown.Item  id="navitem" href="/userlogin"><Icon name="sign-in"/>Login</NavDropdown.Item>
                        <NavDropdown.Item  id="navitem" href="/newuser"><Icon name="add user"/>Register</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 700 }}
                overlay={renderTooltip}
                >
                <Button className="buttonColor"onClick={() => {props.getProfile(); props.getLogin(); props.createdDates() }}><Icon name="list"/>My Dates</Button>
                </OverlayTrigger>
            </Navbar>
         
  
                    <Carousel slide={false} fade={true} id="floatright">
                <Carousel.Item>
                    <img
                    className="carimg1"
                    alt="couple walking down the street"
                    src="https://images.unsplash.com/photo-1431037242647-4c2c27cb5bb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    />
                </Carousel.Item>
                <Carousel.Item>
                     <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1456553583670-f4242f36d0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple with heads resting on eachother"
                    />
                </Carousel.Item>
                <Carousel.Item>
                     <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1440367850806-da68da359421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple walking in forrest"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1545101292-279934cc3b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple holding hands" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1548771953-0e13cf7b05e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple on a beach" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1546560534-a9644bda527a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple on a bridge" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1533053443779-4145a7a6e850?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple holding eachothers waist in coffeeshop" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1488116593952-937c38246bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="kitchen couple" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1567373171107-244e1792695d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple dancing" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1505963159476-8125e38777a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple laughing" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1514588645531-00b8822ad997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple looking at eachother" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1575467678950-0c09aad418af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple laughing in kitchen" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1529696812838-1515d2b22f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple sitting in front of ferris wheel" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1499372076272-6b5c2d2bb391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple holding eachother" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carimg1"
                    src="https://images.unsplash.com/photo-1544481273-9dff7c8797e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="couple holding hands" 
                    />
                </Carousel.Item>
                </Carousel>
         
                       
                        <h1 className="mainHeader">Find-A-Date<Icon name="checked calendar"/></h1>
                        <p className="catchphrase">Do you ever get tired of trying to come up with date ideas? <br/>
                        Find-A-Date is here to help! <br/>
                        Click Find A Date Idea to get a fun date idea.
                        </p>
                        
                        <Button className="buttonColorCenter"onClick={() => props.getDates()}><Icon name="idea"/>Find A Date Idea</Button>
                     
                    
                        
            <h1 className="genDateName">{props.randDate.name}</h1>
            <h3 className="genDateDesc">{props.randDate.description}</h3>
           
       
        </React.Fragment>
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