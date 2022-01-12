// Components
import React, { useState, useContext } from 'react'
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
import { GlobalContext } from '../../providers/Global/Global.provider'

function NavBar() {
  const [params, setParams] = useState('wizeline')
  const { searchParam, onSubmitSearch } = useContext(GlobalContext)

  const onSubmit = () => {
    console.log(params)
    localStorage.setItem('searchParams', params)
    onSubmitSearch(params)
  }

  return (
    <NavContainer>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <ItemsNavContainer>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={params}
                onChange={(e) => setParams(e.target.value)}
              />
              <Button onClick={onSubmit} variant="outline-success">
                Search
              </Button>
            </Form>
            <Link disabled to={'/home'}>
              Login
            </Link>
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
