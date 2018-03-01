import React, { Component } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';



class About extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    // componentDidMount() {
    // }
    render() {
        return (
            <div className='AboutContainer'>
                <Nav />
                <div className='aboutHeader' >
                    <h1> WE ARE NOBLE </h1>
                </div>

            </div >
        )
    }
}
export default About;