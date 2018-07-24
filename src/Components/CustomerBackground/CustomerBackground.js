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
                    <h3>1</h3>
                    <b>2</b>
                    <h3>3 </h3>
                    <h2>4</h2>
                    <p>5</p>
                    <h3>6</h3>
                    <p>7</p>
                    <h1>8</h1>
                    <h2>9 </h2>
                    <h1>10</h1>
                    <i>11</i>
                    <h3>12</h3>
                    <div className='customer-scroll-2'>
                        <p>!</p>
                        <h1>@</h1>
                        <h2># </h2>
                        <p>$</p>
                        <b>%</b>
                        <h3>^</h3>
                        <h2>AAAAAA</h2>
                        <h1>*</h1>
                        <b>- </b>
                        <h3>+</h3>
                        <p>=</p>
                        <h3>||</h3>
                    </div>
                    <div className='customer-scroll-3'>
                        <h1>A</h1>
                        <h2>B</h2>
                        <h3>C </h3>
                        <h1>D</h1>
                        <p>E</p>
                        <h3>F</h3>
                        <p>G</p>
                        <h2>H</h2>
                        <h2>I </h2>
                        <h1>J</h1>
                        <p>K</p>
                        <h3>L</h3>
                    </div>
                </div>

            </div>
        )
    }
}
export default CustomerBackground;