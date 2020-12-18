import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../S.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand"></img>
          </Link>
          <ul className="navbar-nav align-items-center">
          <li className="nav-items ml-5">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-items ml-5">
              <Link to="/cars" className="nav-link">Tesla Cars</Link>
            </li>
            <li className="nav-items ml-5">
              <Link to="/about-me" className="nav-link">About Me</Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2" >
                <i className="fa fa-cart-plus"></i>
              </span>
              Order
            </ButtonContainer>
          </Link>
        </NavWrapper>

      </React.Fragment>
    );
  }
}

const NavWrapper = styled.nav`
  background:var(--mainBlue);
  .nav-link{
    color:var(--mainWhite);
    font-size:1.3rem;
    text-transform : capitalize;
  }
  .navbar-brand{
    height:3rem;
  }
`;

