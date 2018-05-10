//nodemailer
//material ui
import React, { Component } from 'react';
import './Demo.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Nav from './../Nav/Nav';
import Pattern from './../../assets/Pattern.svg';

import TextField from 'material-ui/TextField';




class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            submitSuccess: false
        }
        // this.sendEmail = this.sendEmail.bind(this);
        // this.handleChange = this.handleChange.bind(this)
    }
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        }, () => console.log('state', this.state))
    }

    render() {
        return (
            <div className='demoContainer'>
                <Nav />
                <div className='modalWindow' >
                    <div className='demoHeader'>
                        <p>Request a demo</p>
                    </div>
                    <div className='requestInfo' >
                        <div>
                            <TextField
                                hintText="Name"
                                floatingLabelText="NAME"
                                multiLine={false}
                                rows={1}
                            /> <br />
                            <TextField
                                hintText="johndoe@testemail.com"
                                floatingLabelText="EMAIL"
                                multiLine={false}
                                rows={1}
                            /> <br />
                            <TextField
                                hintText="COUNTY/STATE"
                                floatingLabelText="LOCATION"
                                multiLine={false}
                                rows={1}
                            /> <br />
                            <TextField
                                hintText="Message"
                                floatingLabelText="MESSAGE"
                                multiLine={false}
                                rows={1}
                            /> <br />
                            <div className='demoSubmit'>
                            <h3>SUBMIT</h3>
                            </div>

                        </div>
                        {/* <form>
                        <input type='text' placeholder="NAME" maxLength='30' onChange={(e) => this.handleChange('name', e.target.value)} /> <br />
                        <input type='text' placeholder="EMAIL" maxLength='30' onChange={(e) => this.handleChange('name', e.target.value)} /> <br />
                        <input type='text' placeholder="STATE/COUNTY" maxLength='40' onChange={(e) => this.handleChange('name', e.target.value)} /> <br />
                        <input type='text' placeholder="MESSGE" maxLength='200' onChange={(e) => this.handleChange('name', e.target.value)} /> <br />
                        </form> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Demo;