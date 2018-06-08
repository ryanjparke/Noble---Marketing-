import React, { Component } from 'react';
import './Training.css';

import Nav from '../Nav/Nav';

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
                <div className='productsSideNav'>
                    <div className='assessmentHeader'>
                        <a href='/products'>
                            <div className='backIcon'>
                                <i className="fas fa-arrow-left"></i>
                            </div>Back to products</a>
                    </div>
                    <div className='innerProducts'>
                        <a href='/assessments'><p>Assessments</p> </a>
                        <a className='currentService'href='/training'><p>Training</p> </a>
                        <a href='/extensions'><p>Extensions</p> </a>
                        <a href='/integrations'><p>Integrations</p> </a>
                        <a href='/customers'><p>Customers</p> </a>
                    </div>
                </div>
                {/************* RIGHT SIDE *************/}
                <div className='rightCustomers'>
                <p>Training</p>

                </div>
            </div>
        )
    }
}
export default Training;