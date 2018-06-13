import React, { Component } from 'react';
import './Training.css';

import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal'

class Training extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div className='customersContainer'>
                <Nav />
                {/************ LEFT SIDE *************/}
                <div className='assessmentSideNav'>
                    <div className='assessmentHeader'>
                        <a href='/products'>
                            <div className='backIcon'>
                                <i className="fas fa-arrow-left"></i>
                            </div>Back to products</a>
                    </div>
                    <div className='innerProducts'>
                        <a href='/assessments'><p>Assessments</p> </a>
                        <a className='currentService' href='/training'><p>Training</p> </a>
                        <a href='/extensions'><p>Extensions</p> </a>
                        <a href='/integrations'><p>Integrations</p> </a>
                        <a href='/customers'><p>Customers</p> </a>
                    </div>
                </div>
                {/************* RIGHT SIDE *************/}
                <div className='rightCustomers'>
                    <p>Training</p>
                    <Modal />
                    {/********* FOOTER SECTION *********/}
                    <div className='productsFooterContainer'>
                        <div className='footerLinks'>
                            <a href=''>Our Company</a>
                            <a href=''>Blog</a>
                            <a href=''>Contact Us</a>
                            <a href=''>Give Feedback</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Training;