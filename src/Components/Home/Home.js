import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Noblewhite from './../../assets/Noblewhite.png';
import Mountains from './../../assets/Mountains.jpg';
import MobileCM from './../../assets/MobileCM.svg';


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
                        <div className='mobileImg'>
                            <img src={ MobileCM } />
                            {/* <img src={Mountains}/> */}
                        </div>
                        <p>The world’s most powerful EBP-based risk assessment and case management tool</p>
                        <a href='/demo'><p className='getStartedMobile'>Get started today</p> </a>
                    </div>

                    <div className='mobileheavyFav'>
                        <div className='mobilehomeHeader'>
                            <p>A Heavy Favorite</p>
                        </div>
                        <div className='mobilehomeDesc'>
                            <p>Used by America's leading evidence-based practicing cities and counties:</p>
                            <ul>
                                <li>Austin, TX</li>
                                <li>Kerns County, TX</li>
                                <li>Big County, TX</li>
                                <li>Big County, TX</li>
                            </ul>
                        </div>

                        <div className='quoteContainer'>
                            <div className='indvQuote'>
                                <div className='quoteImg'>
                                    <p>img</p>
                                </div>
                                <div className='quote'>
                                    <p>"I love this software!"</p>
                                    <p>George Washington</p>
                                    <p>County Chief</p>
                                </div>
                            </div>
                            <div className='indvQuote'>
                                <div className='quote'>
                                    <p>"I love this software!"</p>
                                    <p>George Washington</p>
                                    <p>County Chief</p>
                                </div>
                                <div className='quoteImg'>
                                    <p>img</p>
                                </div>
                            </div>
                            <div className='indvQuote'>
                                <div className='quoteImg'>
                                    <p>img</p>
                                </div>
                                <div className='quote'>
                                    <p>"I love this software!"</p>
                                    <p>George Washington</p>
                                    <p>County Chief</p>
                                </div>
                            </div>
                        </div>
                        <div className='mobilehomeHeader'>
                            <p>Fast. Accurate. Simple.</p>
                        </div>
                        <div className='mobileImgtwo'>
                            <p>img</p>
                        </div>
                        <ul>
                            <li>Dead accurate scoring & ranking</li>
                            <li>Worldclass support</li>
                            <li>No onsite training needed</li>
                        </ul>
                        <div className='mobilehomeHeader'>
                            <p>Everything you need.</p>
                        </div>
                        <ul>
                            <li>Assessments</li>
                            <li>Case Planning</li>
                            <li>Training??</li>
                        </ul>
                    </div>
                    <div className='homeEnd'>
                        <div className='mobilehomeHeader'>
                            <p>Request a demo today.</p>
                        </div>
                        <div className='homeInput'>
                            
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Email"/>
                        </div>
                        <div className='mobileSubmit'>
                            <p>Submit</p>
                            </div>
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