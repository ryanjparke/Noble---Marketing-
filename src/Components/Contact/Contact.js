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
            <div className='ContactContainer'>
                <Nav />
                <h1> CONTACT US </h1>

                <Footer />

            </div >
        )
    }
}
export default Contact;