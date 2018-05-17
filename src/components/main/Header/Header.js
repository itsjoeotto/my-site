import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>
                    <span className="my-name">Joe Otto</span>
                </h1>
            </div>
        );
    }
}

export default Header;