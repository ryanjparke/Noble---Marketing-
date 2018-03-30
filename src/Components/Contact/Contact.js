import React, { Component } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';



class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    // componentDidMount() {
    // }
    render() {
        return (
            <div className='contactContainer'>
                <Nav />
                <div className='contactHeader'>
                    <p>GET IN TOUCH</p>
                </div>
                <div className='ourInfo'>
                    <p>OUR PHONE</p>
                    <p>OUR EMAIL</p>
                </div>
                <div className='theirInfo'>
                    <p>Their Name</p>
                    <p>Their Message</p>
                    <h5>SEND</h5>
                </div>
                <Footer />

            </div >
        )
    }
}
export default Contact;