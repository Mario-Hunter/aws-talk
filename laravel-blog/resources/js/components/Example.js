import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import Blog from './Blog.js'

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ""
        }
    }
    componentWillMount =()=>{
        let token = window.localStorage.getItem('token');

        this.setState({token})
    }
    render() {
        let {token} = this.state;
        return (
            <div className="container">
                {token ?
                    <Blog/>
                    :
                    <Login/>
                }
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
