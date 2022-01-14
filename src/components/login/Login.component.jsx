import React, { useState,useContext } from "react";
import { Modal, Button, Form } from 'react-bootstrap'
import loginApi from "../../utils/login.api";
import appContext from '../../context/appContext';

function Login({ show, setShow }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const thisContext = useContext(appContext);
    const { setSession} = thisContext;

    const handleClose = () => {
        setShow(false);
    }

    const handleLogin = async (e) =>{      
        e.preventDefault();
        try{
            const response = await loginApi(userName,password);
            setSession(response);
            setUserName('');
            setPassword('');
            handleClose();
        }catch(err){
            console.log(err);
        }
  
    }

    return (<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        data-testid="login-input-username"
                        placeholder="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}

                    />

                   
                </Form.Group>

                <Form.Group>
                <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        data-testid="login-input-password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={(e)=>handleLogin(e)}>
                Submit
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default Login