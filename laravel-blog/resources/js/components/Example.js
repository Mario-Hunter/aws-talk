import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import Blog from './Blog.js'

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <Login/>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
