import React from 'react';
import Nav from '.././Nav';
import Jumbotron from '.././Jumbotron';
import './Header.css';

function Header() {

    return (
        <header>
            <Nav></Nav>
            <Jumbotron></Jumbotron>
        </header>
    );
}

export default Header;