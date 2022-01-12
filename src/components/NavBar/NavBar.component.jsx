// Components
import React from 'react'
import {
  Navbar,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { NavContainer, ItemsNavContainer } from './NavBar.styled'
import { Link } from 'react-router-dom'

/* // Utils
import { useAuth } from '../../providers/Auth' */

function NavBar() {
  return (
    <NavContainer>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <ItemsNavContainer>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            {/*  <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Form className="d-flex">
              <FormControl
                disabled
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button disabled variant="outline-success">
                Search
              </Button>
            </Form>
            <a href={'/home'}>Login</a>
          </ItemsNavContainer>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>Favs</Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </NavContainer>
  )
}

export default NavBar
