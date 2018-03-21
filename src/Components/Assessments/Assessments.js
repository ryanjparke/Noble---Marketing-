import React, { Component } from 'react';
import './Assessments.css';

import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';

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



class Assessments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 0,

        };
    }
    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div className='asmtsContainer'>
                <Nav />
                {/************ LEFT SIDE *************/}
                <div className='productsSideNav'>
                    <div className='navHeader'>
                        <p>OUR PRODUCTS</p>
                    </div>
                    <div className='innerProducts'>
                        <a href='/assessments'><p>Assessments</p> </a>
                        <a href=''><p>Training</p> </a>
                        <a href=''><p>Extensions</p> </a>
                        <a href=''><p>Integrations</p> </a>
                        <a href=''><p>Something?</p> </a>
                    </div>
                </div>
                {/************* RIGHT SIDE *************/}
                <div className='asmtsRight'>
                    <div className='productsHeader'>
                        <p>Assessments</p>
                    </div>
                    <div className='swipeable'>
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
                                Adult Tools
                                </div>
                            <div style={styles.slide}>
                                Something Else Tools
                                </div>
                        </SwipeableViews>
                    </div>
                </div>

                <Footer />
                {/**** container div ****/}
            </div>
        )
    }
}
export default Assessments;