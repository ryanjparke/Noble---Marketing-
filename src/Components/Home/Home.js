import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Whiteboard from './../../assets/Whiteboard.mp4';


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
            <div className='HomeContainer'>
                {/* ----------FONT URL---------- */}
                {/* <style>@import url('https://cloud.typography.com/7268774/6354952/css/fonts.css');</style> */}
                <Nav />
                <div className='backgrounVid' >
                    <video loop autoPlay><source src={Whiteboard} type = "video/mp4" />
                    </video>



                </div>

            </div >
        )
    }
}
export default Home;