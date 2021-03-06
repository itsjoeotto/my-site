import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
                <nav className="nav-container">
                    <ul className="nav">
                        <li>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
        );
    }
}

export default Nav;