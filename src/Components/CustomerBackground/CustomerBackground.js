import React, { Component } from 'react';
import './CustomerBackground.css';
import { Link } from 'react-router-dom';



class CustomerBackground extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className='CustomerBackgroundContainer'>
                <div className='customer-scroll-1'>
                    <h3>ONE</h3>
                    <b>TWO</b>
                    <h3>THREE </h3>
                    <h2>FOUR</h2>
                    <p>FIVE</p>
                    <h3>SIX</h3>
                    <p>SEVEN</p>
                    <h1>EIGHT</h1>
                    <h2>NINE </h2>
                    <h1>TEN</h1>
                    <i>ELEVEN</i>
                    <h3>TWELVE</h3>
                    <div className='customer-scroll-2'>
                        <p>Ryan</p>
                        <h1>Jon</h1>
                        <h2>Sarah </h2>
                        <p>Kaleb</p>
                        <b>Deb</b>
                        <h3>Bry</h3>
                        <h2>Colb</h2>
                        <h1>Someone</h1>
                        <b>Diana </b>
                        <h3>Aaron</h3>
                        <p>Kelsey</p>
                        <h3>Jenn</h3>
                    </div>
                    <div className='customer-scroll-3'>
                        <h1>Ryan</h1>
                        <h2>Jon</h2>
                        <h3>Sarah </h3>
                        <h1>Kaleb</h1>
                        <p>Deb</p>
                        <h3>Bry</h3>
                        <p>Colb</p>
                        <h2>Someone</h2>
                        <h2>Diana </h2>
                        <h1>Aaron</h1>
                        <p>Kelsey</p>
                        <h3>Jenn</h3>
                    </div>
                </div>

            </div>
        )
    }
}
export default CustomerBackground;