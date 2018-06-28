import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import Noblewhite from './../../assets/Noblewhite.png';
import chaticon from './../../assets/chaticon.png';
import FooterModal from'../FooterModal/FooterModal';


class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    // componentDidMount() {

    // }

    render() {
        return (
            <div className='footerContainer'>
                <div className='footerOverlay'>
                    <div className='footerLeft'>
                    <FooterModal />
                    {/* <a href='/demo'><i class="fas fa-comment"></i> */}
                    {/* <p>Request a demo</p></a> */}
                    </div>
                    <div className='middleFooter'>
                        <img className='footerNoble' src={Noblewhite} />
                    </div>
                    <div className='rightFooter'>
                        <a href='https://www.facebook.com/noblesoftwaregroup/' target='_blank'><i class="fab fa-facebook-square"></i> </a>
                        <a href='https://www.instagram.com/noblesoftware/' target='_blank'><i class="fab fa-instagram"></i></a>
                        <a href='/'><i class="fab fa-twitter-square"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
