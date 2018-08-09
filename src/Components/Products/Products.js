import React, { Component } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Controlled from '../Controlled Tab/Controlled';

import Productsback from './../../assets/Productsback.jpg';
import Desktop from './../../assets/Desktop.png';
import Thumbsup from './../../assets/Thumbsup.jpg';
import techSpecPhoto from './../../assets/techSpecPhoto.png';

import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10
    },
};


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
                    <div className='navHeader'>
                        <p></p>
                    </div>
                    <div className='innerProducts'>
                        <a href='/assessments'><p>Assessments</p> </a>
                        <a href='/training'><p>Training</p> </a>
                        <a href='/integrations'><p>Integrations</p> </a>
                        <a href='/extensions'><p>Extensions</p> </a>
                        <a href=''><p>Partners</p> </a>
                        <a href='/customers'><p>Customers</p> </a>
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
                            <p>Noble Software group provides industry-leading risk assessments and offender compliance tools to corrections agencies nationwide.  Driven by assessment results, staff can easily create customized case plans—including Title-IVe compliant juvenile case plans—with actionable goals and interventions through the use of Noble’s case planning tools.  Full reporting is available for detailed analysis of an agency’s EBP progress. </p>
                            <h5>Something Else</h5>
                            <p>Another great paragraph that is a little smaller describing some other cool feature that will make people want to scroll down and learn more</p>
                            <h5>Not cloud based? No problem.</h5>
                            <p>Our software is available as a cloud-based subscription or as an on-premise solution. No matter your technical requirements, we will be able to find a model that fits.</p>
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
                                {/* <p>Something describing it</p> */}
                            </div>
                        </div>
                        {/* SECOND ICON */}
                        <div className='indvIcon'>
                            <div className='prodIcon'>
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div className='iconDesc'>
                                <h5>Visible Growth</h5>
                                {/* <p>Something describing it</p> */}
                            </div>
                        </div>
                        {/* THIRD ICON */}
                        <div className='indvIcon'>
                            <div className='prodIcon'>
                                <i class="fas fa-users"></i>
                            </div>
                            <div className='iconDesc'>
                                <h5>Certified training</h5>
                                {/* <p>Something describing it</p> */}
                            </div>
                        </div>
                        <div className='indvIcon'>
                            <div className='prodIcon'>
                                <i class="fas fa-dollar-sign"></i>
                            </div>
                            <div className='iconDesc'>
                                <h5>Affordable pricing</h5>
                                {/* <p>Something describing it</p> */}
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr className='style1' />
                    <div className='techContainer'>
                        <div className='techHeader'>
                            <p>TECH SPECS</p>
                        </div>
                        <div className='techDesc'>
                            <p>Noble understands that corrections agencies come in all sizes and have different levels of IT needs. To this end, Noble's assessment platform is available in both cloud-based and on-premise installation options. This provides your agency with the ultimate flexibility around choosing a deployment strategy that is the best fit.</p>
                        </div>
                    </div>
                    <div className='techSection'>
                        <div className='techLeft'>
                            <ul>
                                <div className='indvTech'>
                                    <li>REST/json to accomplish integration</li>
                                    <div className='techIcon'>
                                        <i class="far fa-check-circle"></i>
                                    </div>
                                </div>
                                <br />
                                <hr className='style2' />
                                <div className='indvTech'>
                                    <li>Web Services to help with integration</li>
                                    <div className='techIcon'>
                                        <i class="far fa-check-circle"></i>
                                    </div>
                                </div>
                                <br />
                                <hr className='style2' />
                                <div className='indvTech'>
                                    <li>Cloud based solution or on-premise based solution</li>
                                    <div className='techIcon'>
                                        <i class="far fa-check-circle"></i>
                                    </div>
                                </div>
                                <br />
                                <hr className='style2' />
                                <div className='indvTech'>
                                    <li>Pellentesque habitant morbi tristique senectus</li>
                                    <div className='techIcon'>
                                        <i class="far fa-check-circle"></i>
                                    </div>
                                </div>
                                <br />
                                <hr className='style2' />
                                <div className='indvTech'>
                                    <li>Pellentesque habitant morbi tristique senectus</li>
                                    <div className='techIcon'>
                                        <i class="far fa-check-circle"></i>
                                    </div>
                                </div>
                                <br />
                                <hr className='style2' />

                            </ul>
                        </div>
                        <div className='techRight'>
                            <img src={techSpecPhoto} img/>

                        </div>
                    </div>
                    <br />
                    <br />
                    <hr className='style1' />
                    {/************* TESTIMONIAL SECTION *************/}
                    <div className='testimonial'>
                        <div className='testimonialHeader'>
                            <p>TESTIMONIALS</p>
                        </div>
                        <div className='testimonialContent'>
                            {/******* TOP QUOTE ********/}
                            <div className='indvTestimonial'>
                                <div className='testimonialImg'>
                                    <img src={Thumbsup} />
                                </div>
                                <div className='testimonialQuote'>
                                    <p>"Thank you for doing so much for the field of probation!  Noble’s contributions and commitment to EBP has added more value to what we do than any single initiative in the past 30 years."</p>
                                    <h4>Glen Watson</h4>
                                    <b>Chief Probation Officer</b>
                                </div>
                            </div>
                            {/********** BOTTOM QUOTE **********/}
                            <div className='indvTestimonial'>
                                <div className='testimonialQuote'>
                                    <p>"In my entire time working in this field, I have never seen a faster response time or turnaround time with any questions we have, you guys are the Chick Fil A of vendors!"</p>
                                    <h4>Julie Luxton</h4>
                                    <b>Parker County, TX</b>
                                </div>
                                <div className='testimonialImg'>
                                    <img src={Thumbsup} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <br />
                    <hr className='style1' />
                    {/* ************ END SECTION ************* */}
                    <div className='productEnding'>
                        <div className='testimonialHeader'>
                            <p>JOIN US TODAY</p>
                        </div>
                        <div className='joinusDesc'>
                            <p>Noble is growing quickly on a daily basis.  We would love to help you enjoy the work that you do/enjoy working together or something like that</p>
                            <p>Ready to make life easier?</p>
                        </div>
                        {/* <div className='enterEmail' */}
                        <div className='getStartedEnding'>
                            <form autoComplete="on" className='productpageForm'>
                                <input type='text' placeholder="hello@email.com" className='inputBox' />
                            </form>
                            <div className='productpagegetStarted'>
                                <p>GET STARTED</p>
                            </div>
                        </div>
                        {/***** Footer Section *****/}
                        <div className='productsFooterContainer'>
                            <div className='footerLinks'>
                                <a href=''>Our Company</a>
                                <a href=''>Blog</a>
                                <a href='/contact'>Contact Us</a>
                                <a href='mailto:feedback@noblesg.com'>Give Feedback</a>
                            </div>

                            <div className='footerSocialLinks'>
                                <a
                                className='footerSocialIcons' href='mailto:info@noblesg.com'><i class="far fa-envelope"></i>
                                </a>
                                <a className='footerSocialIcons' href='https://www.facebook.com/noblesoftwaregroup/' target='_blank'><i class="fab fa-facebook-square"></i> </a>
                                <a className='footerSocialIcons' href='' target='blank'><i class="fab fa-instagram"></i> </a>
                                <a className='footerSocialIcons' href='' target='blank'><i class="fab fa-twitter"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/********* MOBILE VIEW *********/}
                <div className='mobileproductstopHeader'>
                    <p>PRODUCTS/SERVICES</p>
                </div>
                <div className='quadSection'>
                    <div className='topTwo'>
                        <div className='quadSingle'>
                            <p>Assessments</p>
                            <div className='quadIcon'>
                                <i class="fas fa-clipboard-check"></i>
                            </div>
                        </div>
                        <div className='quadSingle'>
                            <p>Training</p>
                            <div className='quadIcon'>
                                <i class="fas fa-users"></i>
                            </div>
                        </div>
                    </div>
                    <div className='bottomTwo'>
                        <div className='quadSingle'>
                            <p>Extensions</p>
                            <div className='quadIcon'>
                                <i class="far fa-thumbs-up"></i>
                            </div>
                        </div>
                        <div className='quadSingle'>
                            <p>Integrations</p>
                            <div className='quadIcon'>
                                <i class="fas fa-link"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobileproductsHeader'>
                    <p>Assessments</p>
                </div>
                <div className='mobileAssessmentContent'>
                    <Controlled />
                </div>
                {/* 
                    <Tabs
                        onChange={this.handleChange}
                        value={this.state.slideIndex}>
                        <Tab label="JUVENILE" value={0} />
                        <Tab label="ADULT" value={1} />
                        <Tab label="THREE" value={2} />
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                        <div>
                            <h2 style={styles.headline}>Juvenile Tools</h2>
                            Swipe to see the next slide.<br />
                        </div>
                        <div style={styles.slide}>
                            <h2 style={styles.headline}>Adult Tools</h2>
                                </div>
                        <div style={styles.slide}>
                        <h2 style={styles.headline}>Something Else Tools</h2>
                                </div>
                    </SwipeableViews>
                </div> */}
                <div className='mobileproductsHeader'>
                    <p>Training</p>
                </div>
                <div className='mobileproductsHeader'>
                    <p>Extensions</p>
                </div>
                <div className='mobileproductsHeader'>
                    <p>Integration</p>
                </div>
                {/* container div */}
            </div >
        )
    }
}
export default Products;




{/* <div className={this.state.toggleModal ? 'indvProduct displayModal' : 'indvProduct hideModal'}> */ }