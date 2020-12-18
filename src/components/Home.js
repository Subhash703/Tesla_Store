import React, { Component } from 'react';
import car from '../tesla_car_4.png';
export default class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="home-wrap">
                    <div className="home__car p-5 mx-5">
                        <img src={car} alt="Car Image"/>
                    </div>
                    <h2 className="title">TESLA</h2>
                    <h3 className="tagline">To accelerate the advent of sustainable transport</h3>
                    <p className="py-4">Special Project For Web Mania 2.0</p>
                </div>
            </React.Fragment>
        )
    }
}