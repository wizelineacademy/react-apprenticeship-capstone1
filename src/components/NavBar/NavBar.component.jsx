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
import { useHistory } from 'react-router-dom'

/* // Utils
import { useAuth } from '../../providers/Auth' */
import { GlobalContext } from '../../providers/Global/Global.provider'

function NavBar() {
  const [params, setParams] = useState('wizeline')
  const { onSubmitSearch } = useContext(GlobalContext)
  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    history.push('./')
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
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault()
                }}
              />
              <Button onClick={onSubmit} variant="outline-success">
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
