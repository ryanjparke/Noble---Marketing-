import React, { Component } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';



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
            <div className='ProductsContainer'>
                <Nav />
                <div className='productsHeader'>
                    <p>PRODUCTS</p>

                </div>

            </div >
        )
    }
}
export default Products;