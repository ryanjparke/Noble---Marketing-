import React, { Component } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import Nobleblue from './../../assets/Nobleblue.png';



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
                    {/* <img className='nobleBlue' src={Nobleblue} /> */}
                    <p>WE'RE NOBLE</p>
                </div>
                <div className="storyContainer" >
                    <p>Noble was founded in the early summer of 2012 by a close-knit team of co-workers who shared a common vision: help improve the way corrections assesses and treats the criminogenic needs of offenders.  Our goal is very simple; we want to have the best assessment and case planning tools in the country.  We do this by maintaining close relationships with assessment authors, using cutting edge software development practices, and most importantly, listening to our users</p>
                </div>
                {/************ MOBILE VIEW *************/}
                <div className='mobilehomeHeader'>
                    <p>THE TEAM</p>
                </div>
                <div className='mobileTeam'>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <p>photo</p>
                        </div>
                        <div className='memberName'>
                            <p>Diana Norris</p>
                            <p>President</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <p>photo</p>
                        </div>
                        <div className='memberName'>
                            <p>Aaron Picton</p>
                            <p>CFO</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <p>photo</p>
                        </div>
                        <div className='memberName'>
                            <p>Mark Winterman</p>
                            <p>Engineer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <p>photo</p>
                        </div>
                        <div className='memberName'>
                            <p>Colby Brown</p>
                            <p>Engineer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <p>photo</p>
                        </div>
                        <div className='memberName'>
                            <p>Bryan Parke</p>
                            <p>Engineer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <p>photo</p>
                        </div>
                        <div className='memberName'>
                            <p>Bret Coppess</p>
                            <p>Engineer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <p>photo</p>
                        </div>
                        <div className='memberName'>
                            <p>Jeremy Carranza</p>
                            <p>Trainer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <p>photo</p>
                        </div>
                        <div className='memberName'>
                            <p>Ryan Parke</p>
                            <p>Support Engineer</p>
                        </div>
                    </div>

                </div>
                {/**** CONTAINER DIV ****/}
                <Footer />
            </div >
        )
    }
}
export default About;