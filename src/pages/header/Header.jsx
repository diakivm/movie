import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './Header.scss'

export default function Header() {
   return (
         <Navbar bg="warning" expand="lg">
            <Container fluid>
               <Navbar.Brand href="#">Movie</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                     >
                     <Nav.Link href="#action1">Home</Nav.Link>
                     <Nav.Link href="#action2">Movies</Nav.Link>
                     <Nav.Link href="#action3">Seriales</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                  <FormControl
                     type="search"
                     placeholder="Search"
                     className="me-2"
                     aria-label="Search"
                  />
                  <Button variant="light">Search</Button>
                  </Form>
               </Navbar.Collapse>
            </Container>
   </Navbar>
   )
}
