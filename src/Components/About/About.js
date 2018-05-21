import React, { Component } from 'react';
import './About.css';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import Nobleblue from './../../assets/Nobleblue.png';
import PrincessDiana from './../../assets/PrincessDiana.jpg';
import Markalf from './../../assets/markalf.jpg';
import BryanS from './../../assets/BryanS.jpg';
import kobebrown from './../../assets/kobebrown.jpg';
import BretSheeran from './../../assets/BretSheeran.jpg';
import aaronA from './../../assets/aaronA.jpeg';
import RyanR from './../../assets/RyanR.jpg';
import Heaven from './../../assets/Heaven.mp4';



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
                <div className='vidIntro'>
                    <video loop autoPlay><source src={Heaven} type="video/mp4" />
                    </video>
                    <div className='aboutOverlay'>
                        <div className='overlayIntro'>
                            <h3>We do what we love. We love what we do.</h3>
                            <p>Not only are we passionate about our work, we love the people we surround ourselves with. Come join us and you will know what we mean.</p>
                        </div>
                    </div>
                </div>
                <div className='aboutHeader' >
                    <img className='nobleBlue' src={Nobleblue} />
                    <p>WE'RE NOBLE</p>
                </div>
                <div className="storyContainer" >
                    <p>Noble was founded in the early summer of 2012 by a close-knit team of co-workers who shared a common vision: help improve the way corrections assesses and treats the criminogenic needs of offenders.  Our goal is very simple; we want to have the best assessment and case planning tools in the country.  We do this by maintaining close relationships with assessment authors, using cutting edge software development practices, and most importantly, listening to our users</p>
                </div>
                {/************ MOBILE VIEW *************/}
                <div className='mobilehomeHeader'>
                    <p>MEET THE TEAM</p>
                </div>
                <div className='mobileTeam'>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <img src={PrincessDiana} />
                        </div>
                        <div className='memberName'>
                            <p>Diana Norris</p>
                            <p>President</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <img src={aaronA} />
                        </div>
                        <div className='memberName'>
                            <p>Aaron Picton</p>
                            <p>CFO</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <img src={Markalf} />
                        </div>
                        <div className='memberName'>
                            <p>Mark Winterman</p>
                            <p>Engineer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <img src={kobebrown} />
                        </div>
                        <div className='memberName'>
                            <p>Colby Brown</p>
                            <p>Engineer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <img src={BryanS} />
                        </div>
                        <div className='memberName'>
                            <p>Bryan Parke</p>
                            <p>Engineer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <img src={BretSheeran} />
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
                            <img src={RyanR} />
                        </div>
                        <div className='memberName'>
                            <p>Ryan Parke</p>
                            <p>Support Engineer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='memberPhoto'>
                            <img src={RyanR} />
                        </div>
                        <div className='memberName'>
                            <p>Brent Norris</p>
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