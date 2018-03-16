import React, { Component } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import Productsback from './../../assets/Productsback.jpg';
import Desktop from './../../assets/Desktop.svg';



class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleModal: false
        }
        this.toggleModalFunc = this.toggleModalFunc.bind(this);
    }
    toggleModalFunc() {
        this.setState({
            toggleModal: !this.state.toggleModal

        })
    }
    // componentDidMount() {
    // }
    render() {
        return (
            <div className='productsContainer'>
                <Nav />
                {/************* LEFT SIDE *************/}
                <div className='productsSideNav'>
                    <div className='navOverlay'>
                        <h2>OUR PRODUCTS</h2>
                    </div>
                    <div className='innerProducts'>
                        <div className='testButton' onClick={this.toggleModalFunc}>TESTER</div>
                        <a href='/products'><h3>Assessments</h3> </a>
                        <a href=''><h3>Training</h3> </a>
                        <a href=''><h3>Extensions</h3> </a>
                        <a href=''><h3>Integrations</h3> </a>
                        <a href=''><h3>Something Else?</h3> </a>
                    </div>

                </div>
                {/************* RIGHT SIDE *************/}
                <div className="productsIntro">
                    <div className='productsHeader'>
                        <p>OUR PRODUCTS</p>
                    </div>
                    <div className='productsDesc'>
                        <div className='descLeft'>
                            <h2>Fast setup, simple use</h2>
                            <p>Some kind of interesting short paragraph about how the setup is so simple that they will literally pass out and wake up in a year</p>
                            <h5>Something Else</h5>
                            <p>Another great paragraph that is a little smaller describing some other cool feature that will make people want to scroll down and learn more</p>
                            <h5>No something? No problem</h5>
                            <p>Another great paragraph that is a little smaller describing some other cool feature that will make people want to scroll down and learn more</p>
                        </div>
                        <div className='descRight'>
                            <img src={Desktop} />
                        </div>

                    </div>
                    {/************* ICONS SECTION *************/}
                    <div className='iconsContainer'>
                        {/* FIRST ICON */}
                        <div className='indvIcon'>
                            <div className='prodIcon' >
                                <i class="fas fa-chart-pie"></i>
                            </div>
                            <div className='iconDesc'>
                                <h5>Readable data</h5>
                                <p>Something describing it</p>
                            </div>
                        </div>
                        {/* SECOND ICON */}
                        <div className='indvIcon'>
                            <div className='prodIcon'>
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div className='iconDesc'>
                                <h5>Visible Growth</h5>
                                <p>Something describing it</p>
                            </div>
                        </div>
                        {/* THIRD ICON */}
                        <div className='indvIcon'>
                            <div className='prodIcon'>
                                <i class="fas fa-users"></i>
                            </div>
                            <div className='iconDesc'>
                                <h5>Certified training</h5>
                                <p>Something describing it</p>
                            </div>
                        </div>
                        <div className='indvIcon'>
                            <div className='prodIcon'>
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                            <div className='iconsDesc'>
                                <h5>Affordable pricing</h5>
                                <p>Something describing it</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr className='style1' />
                    <div className='techHeader'>
                        <p>Tech Specs</p>
                    </div>
                    <div className='testimonialHeader'>
                        <p>Testimonials</p>
                    </div>
                </div>
                <Footer />
                {/* container div */}
            </div >
        )
    }
}
export default Products;




{/* <div className={this.state.toggleModal ? 'indvProduct displayModal' : 'indvProduct hideModal'}> */ }