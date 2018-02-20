import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
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


            </div>
        )
    }
}

export default Nav;
