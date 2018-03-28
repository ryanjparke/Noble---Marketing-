import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

///ASSETS///
import Noblesmall from './../../assets/Noblesmall.png';

/// Material UI ///
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
                    <p>NOBLE SOFTWARE GROUP</p>
                </div>
                <div className='navRight' >
                    <a href='/'>HOME</a>
                    <a href='/products'>PRODUCTS</a>
                    <a href='/about'>ABOUT</a>
                    <a href='/contact'>CONTACT</a>
                </div>

                {/************* MOBILE VIEW NAV **************/}
                {/* <div className='mobileNav' > */}
                    <div className='mobileLeft' >
                        <Link className="navLink" to="/"><img src={Noblesmall} alt='Noblesmall' className="mobileNoble" /></Link>
                    </div>
                    <div className='mobileRight' >
                        {/* <div className='menu'>
                            <div className='mobileMenu' onClick={this.toggleMenuFunc}>
                                <div className={this.state.toggleMenu ? "bar1 menuIcon" : "menuIcon"}></div>
                                <div className={this.state.toggleMenu ? "bar2 menuIcon" : "menuIcon"}></div>
                                <div className={this.state.toggleMenu ? "bar3 menuIcon" : "menuIcon"}></div>

                            </div>

                        </div> */}

                        <div className='muiMobile'>
                            <IconMenu
                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                                <Link className="navLink mobile" to="/products"><MenuItem className='menuText' primaryText="Products" /></Link>
                                <Link className="navLink mobile" to='/about'><MenuItem className='menuText' primaryText="About" /></Link>
                                <Link className="navLink mobile" to='/contact'><MenuItem className='menuText' primaryText="Contact" /></Link>
                               <Link className="navLink mobile" to='/demo'><MenuItem className='menuText' primaryText="Request a Demo" /></Link>
                            </IconMenu>
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



                {/* </div> */}
            </div>
        )
    }
}

export default Nav;
