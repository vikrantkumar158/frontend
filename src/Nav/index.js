import React from 'react';
import './Nav.css';

function Nav() {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src={"/logo60.png"} className="img-responsive" alt="WEESHIRT" />
            </a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="far fa-heart" aria-hidden="true"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;