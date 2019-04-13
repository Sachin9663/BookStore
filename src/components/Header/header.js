import React, { Component } from 'react';
import {Link,Router} from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <header className="Main-header">
                    <img src={logo} className="logo" alt="logo" />
                    <h2>Book Store</h2>
                </header>
            </div>
        );
    }
}

export default Header;
