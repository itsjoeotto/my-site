import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="blog-container">
                <Header />
                <Nav />
                <div className="blog-content">
        {/* TO-DO: put a blog post component here */}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Blog;