import React, { Component } from 'react';
import '../aboutus.css';
import {Link} from 'react-router-dom';
import "font-awesome/css/font-awesome.css";
import myimg from '../right-img.svg';
import main_image from '../main_image.jpg';
import styled from 'styled-components';

export default class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <header>
                    <Header>
                        <div className="wrapper">
                            <h1 className="title_h">Front End <br/> Web Developer
                                <span>
                                HTML, CSS, JS and React | Back end in PHP & MySQL. <br/> Looking for summer internship to gain some industrial experience
                                </span>
                                <div className="social-media">
                                    <a to="https://google.com"><i className="fa fa-instagram"></i></a>
                                    
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-linkedin"></i>
                                    <i className="fa fa-github"></i>
                                </div>
                            </h1>

                            <img className="myimg" src={myimg} alt=""/>
                        </div>
                    </Header>
                </header>
                <main>
                    <div className="main_wrapper">
                        <div className="main_skill">
                            <h2> My Skills</h2>
                            <p>HTML</p>
                            <div className="skill_bar">
                                <div className="skills html">90%</div>
                            </div>

                            <p>CSS</p>
                            <div className="skill_bar">
                                <div className="skills css">90%</div>
                            </div>

                            <p>JavaScript</p>
                            <div className="skill_bar">
                                <div className="skills js">85%</div>
                            </div>

                            <p>PHP</p>
                            <div className="skill_bar">
                                <div className="skills php">60%</div>
                            </div>

                            <p>ReactJs</p>
                            <div className="skill_bar">
                                <div className="skills react">60%</div>
                            </div>

                            <p>Competetive Programming</p>
                            <div className="skill_bar">
                                <div className="skills cp">Working on</div>
                            </div>
                        </div>
                        <div className="main_image">
                            <img src={main_image} alt=""/>
                            <div className="details">
                                <h2>Subhash Chandra</h2>
                                <p><strong>Student</strong> <br/>2nd Year , Lovely Professional University</p>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <p>Subhash Chandra</p>
                </footer>
            </React.Fragment>
        )
    }
}

const Header = styled.header`
    .wrapper{
        display:flex;
        flex:2 1; 
        justify-content:space-around;
        padding:1rem;
        height:100vh;
    }

    .myimg{
        padding:3rem;
        position:relative;
        // margin-left:15rem;
    }
    .title_h{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        color:white;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 4rem;
        line-height: 100px;
        span{
            
            font-size:14px;
            line-height:18px;
        }
    }
`