import React, {useState} from 'react';
import './bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import'./login.css'
import { useLocation } from "react-router-dom";
  import axios from "axios";
    function Login() {

      const location = useLocation();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    

      const handleSubmit = async(event) => {
        console.log(email);console.log(password);
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:5000/admin-page', {
            email: email,
            password: password
          });
          console.log(response.data);
          const token = response.data.token;
          const id = response.data.idU;
          window.location.href = `/Dash?token=${token}&id=${id}`;
        } catch (error) {
          console.error(error);
        }
     
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
      


        return (/*
 <Card.Body>
 <Card.Title className="text-center"> <h1>Connection</h1> </Card.Title>

            <Card style={{ width: '35rem', height: '25rem' }} className="mx-auto my-auto">

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={handleEmailChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={handlePasswordChange} />
      </Form.Group>
      
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>

    </Card.Body>
 */

    <div class="registration-form">
        <div class="social-media">
        <h1>Connection Admin</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div class="form-icon">
                <span><i class="icon icon-user"></i></span>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="email" placeholder="Email" onChange={handleEmailChange} />
            </div>
         
            <div class="form-group">
                <input type="password" class="form-control item" id="password" placeholder="Password" onChange={handlePasswordChange} />
            </div>
           
            <div class="form-group">
                <button type="submit" class="btn btn-block create-account">Se Connecter</button>
            </div>
        </form>
      
    </div>
   
  );
};


export default Login;