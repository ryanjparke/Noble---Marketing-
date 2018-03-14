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
                
                    
                    <h2>Header</h2>
                    <div className='introBody'>
                    <p>Noble offers both an engine for the delivery of assessments, industry leading risk and needs assessments for youth and adults, and training to make it all work for your staff. Noble works closely with the authors and researchers that create assessments in order to ensure perfect fidelity with the author's creation. And of course, all of our products have training available-we don't believe that an EBP implementation is something that you just figure out as you go. Don't see a tool that you'd like to use? Contact us and let us know, we specialize in the automation of assessments of all kinds!
                        <br/>

Our software is available as a cloud-based subscription or as an on-premise solution. No matter your technical requirements, we will be able to find a model that fits. </p>
</div>
                    </div>
                    <div className='testButton'>TESTER</div>
                    <Footer />
{/* container div */}
            </div >
        )
    }
}
export default Products;