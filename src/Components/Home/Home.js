import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Noblewhite from './../../assets/Noblewhite.png';
import Mountains from './../../assets/Mountains.jpg';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    // componentDidMount() {
    // }
    render() {
        return (
            <div className='homeContainer'>
                <Nav />
                <div className='welcomeBox'>
                    <div className='innerWelcome'>
                        <img src={Noblewhite} className='nobleWhite' />
                        <h1>Assessments. Case Planning. Easy.</h1>
                        <a href='/demo'><h4 className='getStarted'>Get started today</h4> </a>
                    </div>
                </div>
                {/************* MOBILE VIEW *************/}
                <div className='mobileHome'>
                    <div className='cm'>
                        <div className='mobileHeader'>
                            <p>CASE MANAGER</p>
                        </div>
                        <p>img</p>
                        <p>The world’s most powerful EBP-based risk assessment and case management tool</p>
                        <a href='/demo'><p className='getStartedMobile'>Get started today</p> </a>
                    </div>
                    {/* <Footer /> */}
                </div>
                {/* Container Div */}
            </div >
        )
    }
}
export default Home;







{/* ----------FONT URL---------- */ }
{/* <style>@import url('https://cloud.typography.com/7268774/6354952/css/fonts.css');</style> */ }