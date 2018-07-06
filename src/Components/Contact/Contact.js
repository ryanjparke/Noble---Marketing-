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
                <div className='aboutHeaderBackground' >
                    <div className='contactHeader'>
                        <div className='bullhornContainer'>
                            <i class="fas fa-bullhorn"></i>
                        </div>
                        <p>GET IN TOUCH</p>
                    </div>
                </div>
                {/* <div className='contactHeader'>
                    <p>GET IN TOUCH</p>
                </div> */}
                <div className='contactIntro'>
                    <h4>Have a question?</h4>
                </div>
                <div className='contactParagraph'>
                    <p>Tired of typing in endless numbers into your phone only to reach an automated recording?  Give us a call, talk to a human.  We are prepared to answer any of your questions or concerns</p>
                </div>
                {/******* ICON CONTAINER *******/}
                <div className='contactContent'>
                    <div className='singleContactContainer'>
                        <div className='contactIcon'>
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className='contactInfo'>
                            <p>Noble Software Group</p>
                            <p>1320 Yuba St, STE 212</p>
                            <p>Redding, CA 96001</p>
                        </div>
                    </div>
                    <div className='singleContactContainer'>
                        <div className='contactIcon'>
                            <i class="fas fa-phone"></i>
                        </div>
                        <div className='contactInfo'>
                            <p>(979) 248-6568</p>
                        </div>
                    </div>
                    <div className='singleContactContainer'>
                        <div className='contactIcon'>
                            <i class="far fa-paper-plane"></i>
                        </div>
                        <div className='contactInfo'>
                            <a href='mailto:info@noblesg.com'>info@noblesg.com</a>
                        </div>
                    </div>
                </div>
                {/******* INFO CONTAINER *******/}
                <div className='infoContent'>
                   

                </div>
                <Footer />


            </div >
        )
    }
}
export default Contact;