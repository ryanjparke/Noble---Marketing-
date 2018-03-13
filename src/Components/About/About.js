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
                    <img className='nobleBlue' src={Nobleblue} />
                    <h1>OUR STORY</h1>
                </div>
                <div className="storyContainer" >
                    <h1>In the beginning</h1>
                </div>
                


                <Footer />

            </div >
        )
    }
}
export default About;