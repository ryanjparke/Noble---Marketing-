import React, { Component } from 'react';
import './Customers.css';

import Nav from '../Nav/Nav';

class Customers extends Component {
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
                        <a href='/training'><p>Training</p> </a>
                        <a href='/extensions'><p>Extensions</p> </a>
                        <a href='/integrations'><p>Integrations</p> </a>
                        <a className='currentService' href='/customers'><p>Customers</p> </a>
                    </div>
                </div>
                {/************* RIGHT SIDE *************/}
                <div className='rightCustomers'>
                    {/* <div className='customerList'> */}
                        <p className='assessmentsHeader'>Meet our Customers</p>
                        <div className='indvCustomer'>
                        <p>Customer 1</p>
                        </div>
                        <div className='indvCustomer'>
                        <p>Customer 2</p>
                        </div>
                        <div className='indvCustomer'>
                        <p>Customer 3 and so on
                        </p>
                        </div>
                    {/* </div> */}

                </div>
            </div>
        )
    }
}
export default Customers;