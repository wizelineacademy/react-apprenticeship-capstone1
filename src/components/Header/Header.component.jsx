import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.css';
import { Container, Form, Row, Col, Dropdown } from 'react-bootstrap';
import appContext from '../../context/appContext';
import Login from '../login/Login.component';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleModal = () => setShow(!show);
  const thisContext = useContext(appContext);
  const {
    searchTerm,
    setSearchTerm,
    toggleStyles,
    userProps,
    isLogged,
    logout,
  } = thisContext;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSwitch = () => {
    setSwitchValue(!switchValue);
    toggleStyles(!switchValue);
  };

  const handleKeyPress = (target) => {
    if (target.charCode === 13) {
      if (searchTerm !== searchValue) {
        console.log('different');
        setSearchTerm(searchValue);
      }
    }
  };
  return (
    <div className="header">
      <Container className="form-search">
        <Row>
          <Col xs={12} sm={6} md={6}>
            <Form>
              <Form.Group controlId="formSearch">
                <Form.Control
                  type="text"
                  data-testid="header-input-search"
                  placeholder="..."
                  value={searchValue}
                  onChange={(e) => handleChange(e)}
                  onKeyPress={(e) => handleKeyPress(e)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            sm={5}
            md={5}
            className="d-none d-sm-block d-xs-block switch-container"
          >
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                data-testid="header-input-switch"
                label="Toggle Style"
                checked={switchValue}
                onChange={handleSwitch}
                style={{ float: 'right' }}
              />
            </Form>
          </Col>
          <Col sm={1} md={1} className="d-none d-sm-block d-xs-block">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-menu-login">
                {isLogged ? (
                  <img src={userProps.avatarUrl} className="user"></img>
                ) : (
                  <i
                    className="fa fa-user-circle fa-2x user"
                    style={{ float: 'right' }}
                  ></i>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {isLogged ? (
                  <Dropdown.Item>
                    <Link
                      to={{
                        pathname: '/private',
                      }}
                    >
                      {' '}
                      Favorites
                    </Link>
                  </Dropdown.Item>
                ) : null}
                {isLogged ? (
                  <Dropdown.Item onClick={logout}>
                    <Link
                      to={{
                        pathname: '/home',
                      }}
                    >
                      {' '}
                      Logout
                    </Link>
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={handleModal}>Login</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Login
              show={show}
              setShow={setShow}
              handleShow={handleShow}
            ></Login>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
