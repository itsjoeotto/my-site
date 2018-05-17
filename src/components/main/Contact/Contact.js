import React, { Component} from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container" >
                <Header />
                <Nav />
                <h3>Let's Hang Out!</h3>
                <a href="#">Check out my resume</a>
                <Footer />
            </div>
        );
    }
}

export default Contact;