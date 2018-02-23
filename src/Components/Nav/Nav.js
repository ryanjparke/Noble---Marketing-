import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

import Noblesmall from './../../assets/Noblesmall.png';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleMenu: false

        }
        this.toggleMenuFunc = this.toggleMenuFunc.bind(this);
    }

    toggleMenuFunc() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="navContainer">
                <div className='navLeft'>
                    <h4>NOBLE SOFTWARE GROUP</h4>
                </div>
                <div className='navRight' >
                    <a href='/'>HOME</a>
                    <a href='/products'>PRODUCTS</a>
                    <a href='/about'>ABOUT</a>
                    <a href='/contact'>CONTACT</a>
                </div>

                {/* MOBILE VIEW NAV */}
                <div className='mobileNav' >
                    <div className='mobileLeft' >
                        <img src={Noblesmall} alt='Noblesmall' className="mobileNoble" />
                    </div>
                    <div className='mobileRight' >
                        <div className='menu'>
                            <div className='mobileMenu' onClick={this.toggleMenuFunc}>
                                <div className={this.state.toggleMenu ? "bar1 menuIcon" : "menuIcon"}></div>
                                <div className={this.state.toggleMenu ? "bar2 menuIcon" : "menuIcon"}></div>
                                <div className={this.state.toggleMenu ? "bar3 menuIcon" : "menuIcon"}></div>

                            </div>

                        </div>

                    </div>
                    {/* <div className={this.state.toggleGear || this.state.toggleMenu ? 'modalHolder' : 'modalHolder hideModal'} onClick={this.toggleAllFalse}>
                    </div>

                    <div className={this.state.toggleMenu ? ' displayMenuModal menuDropDown ' : 'hideMenuModal menuDropDown'}>
                        <div className='menuLinkHolder'>
                            <h3>Search</h3>
                            <Link to='/'><h4>Home</h4></Link>
                            <Link to='/'><h4>Products</h4></Link>
                            <Link to='/'><h4>Contact</h4></Link>
                        </div>
                    </div> */}

                </div>



            </div>
        )
    }
}

export default Nav;