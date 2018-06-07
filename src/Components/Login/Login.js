import React, { Component } from 'react';
import './Login.css';

import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Auth } from 'aws-amplify';




class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    validateForm() {
        return this.state.username === "admin" && this.state.password === "noble"
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        try {
            await Auth.signIn(this.state.username, this.state.password);
            alert("Logged in!");  
    } catch (e) {
        alert(e)
    }
}

    render() {
        return (
            // HARD CODED LOGIN COMPONENET
            <div className='loginContainer'>
                <h3>Under construction!</h3>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type='password'
                        />
                    </FormGroup>
                    <button
                        block
                        bsSize='large'
                        disabled={!this.validateForm()}
                        type="Submit"
                        a href='/'
                    >Login
                </button>
                </form>
            </div >
        )
    }
}

export default Login;