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

        }
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
                    <p>OUR PRODUCTS</p>
                    </div>
                    <div className='innerProducts'>
                        <a href='/products'><h3>Juvenile</h3> </a>
                        <a href=''><h3>Adult</h3> </a>
                        <a href=''><h3>Case Planning</h3> </a>
                        <a href=''><h3>Assessments</h3> </a>
                        <a href=''><h3>Something Else</h3> </a>
                        <a href=''><h3>Six</h3> </a>
                        <a href=''><h3>Seven</h3> </a>
                        </div>

                </div>
                {/************* RIGHT SIDE *************/}
                <div className='indvProduct'>
                    <h1>Hello</h1>
                    </div>
{/* container div */}
            </div >
        )
    }
}
export default Products;