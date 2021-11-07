import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../new-bodega-logo.jpg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    render() {
        return <NavWrapper className="navbar navbar-expand-sm
        navbar-dark px-sm-5">
            {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
            <Link to='/'>
                <img src={logo} alt="store" height="50rem" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                    <Link to='/' className="nav-link">
                        FRANKIE'S BODEGA
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/' className="nav-link">
                        everyday items
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className="mr-auto">
                <ButtonContainer>
                    <span>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    My Cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
    }
}

const NavWrapper = styled.nav`
background: #f6f2e7;
.nav-link{
    color: #a96ae6 !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`

export default Navbar;

