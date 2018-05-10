import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
            <hr />
                <div className="social-icon-container">
                    <a target="_blank" href="https://www.twitter.com/itsjoeotto">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/joe-otto-a3429160/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://www.github.com/itsjoeotto">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:joe@itsjoeotto.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <p className="copy-stuff">&copy; Joe Otto 2018</p>
            </div>
        );
    }
}

export default Footer;