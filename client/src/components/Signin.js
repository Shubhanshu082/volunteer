import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab'
import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/Signin.css'
// import firebase from 'backend/firebase/app';
// import 'firebase/auth';

export const Signin = ({showModal, setShowModal}) => {
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [registerData, setRegisterData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
    });

    const handleLogin = (event) => {
    // prevents the submit button from refreshing the page
        event.preventDefault();
        axios.post("http://localhost:3000/api/user/login",registerData )
        .then(res=>console.log(res))
    };

    const handleRegister = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/api/user/register",registerData )
        .then(res=>console.log(res))
    };

  return (
    <Modal show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Body className='p-4 border-8'>
            <Tabs justify defaultActiveKey="Signin" className='mb-5'>
                <Tab eventKey="Signin" title="Signin">
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Tab>
                <Tab eventKey="Register" title="Register">
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" value={registerData.name} onChange={(e) => setRegisterData({...registerData, name: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter display name" value={registerData.userName} onChange={(e) => setRegisterData({...registerData, userName: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Tab>
            </Tabs>
        </Modal.Body>
    </Modal>
  )
}

export default Signin;