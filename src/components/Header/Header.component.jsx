import React from "react";
import "./Header.styles.css"
import { Container, Form, Row, Col} from 'react-bootstrap'
import styled from 'styled-components'



const HeaderButton = styled.button`
    background-color:#1c1c1c;
    color: #f1f1f1;
    border-radius: 0;
    border: none;
    margin:0;
`

function Header() {
    return (<div className="header">
        <Container className="form-search">
            <Row>
                <Col xs={12} sm={6} md={6}>
                    <Form>
                        <Form.Group controlId="formSearch">
                            <Form.Control type="text" 
                            data-testid="header-input-search"
                            placeholder="..." />
                        </Form.Group>
                    </Form>
                </Col>
                <Col  sm={5} md={5} className="d-none d-sm-block d-xs-block">
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            data-testid="header-input-switch"
                            label="Toggle Style"
                            style={{float:"right"}}
                        />

                    </Form>
                </Col>
                <Col sm={1} md={1} className="d-none d-sm-block d-xs-block">  
                <HeaderButton  data-testid="header-btn-login">
                    <i className="fa fa-user-circle fa-2x" style={{float:"right"}}>
                    </i></HeaderButton>

                </Col>

            </Row>




        </Container>
    </div >)
}

export default Header;