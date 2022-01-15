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

// Utils
import { GlobalContext } from '../../providers/Global/Global.provider'

function NavBar() {
  const [params, setParams] = useState('wizeline')
  const { onSubmitSearch, changeTheme, darkTheme } = useContext(GlobalContext)
  const history = useHistory()

  // Functions
  const onSubmit = (e) => {
    e.preventDefault()
    history.push('./')
    onSubmitSearch(params)
  }

  const onToogleChange = () => {
    changeTheme()
  }

  return (
    <NavContainer>
      <Navbar bg={darkTheme ? 'dark' : 'light'} expand={false}>
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
            <div>
              <a href={'/home'}>Login</a>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onChange={onToogleChange}
                  checked={darkTheme ? true : false}
                />
              </Form>
            </div>
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
