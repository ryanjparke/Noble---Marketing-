import React, { Component } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import Productsback from './../../assets/Productsback.jpg';



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
                <div className={this.state.toggleModal ? 'indvProduct displayModal' : 'indvProduct hideModal'}>
                    <div className='productHeader'>
                        <h2>Header</h2>
                        <div className='introBody'>


                        </div>
                    </div>
                </div>

                <Footer />
                {/* container div */}
            </div >
        )
    }
}
export default Products;