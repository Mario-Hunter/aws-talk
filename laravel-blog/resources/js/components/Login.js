import React from 'react';
import '../css/Login.css';

export default class Login extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	token: ""
        }
    }
	
	submit =()=>{
		let {email, password} = this.state;

        // let url = `http://localhost:8000/api/v1/authenticate`;
        // fetch(url, {
        //     method: 'POST',
        //     headers:{
        //         "Accept": "application/json",
        //         "cache-control": "no-cache"
        //     }, 
        //     data:{
        //     	email: email,
        //     	password: password
        //     }
        // }).then(function(response) {
        // 	console.log(response)
        //     return response.json();
        // }).then((myJson)=> {
        //     console.log(myJson)
        // });

        var data = new FormData();
		data.append("email", email);
		data.append("password", password);

		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function () {
		  if (this.readyState === 4) {
		  	// this.setState({to})
		  	let res = JSON.parse(this.response);
		  	let id = res.data.id
		  	let token = res.meta.access_token;
		    window.localStorage.setItem("id",id);
		    window.localStorage.setItem("token",token);
		    document.location.reload();
		  }
		});

		xhr.open("POST", "http://localhost:8000/api/v1/authenticate");
		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader("cache-control", "no-cache");

		xhr.send(data);
	}

	render(){
		let userIcon = require('../assets/user.png');
		return (
			<div className= "LoginContainer">
				<div className="form">
				  <div className="imgcontainer">
				    <img src={userIcon} alt="Avatar" className="avatar"/>
				  </div>

				  <div className="container">
				    <label><b>Username</b></label>
				    <input onChange={(event)=>this.setState({email:event.target.value})} type="text" placeholder="Enter Username" name="uname" required/>

				    <label><b>Password</b></label>
				    <input  onChange={(event)=>this.setState({password:event.target.value})} type="password" placeholder="Enter Password" name="psw" required/>

				    <button onClick={this.submit}>Login</button>
				  </div>
				</div>
			</div>
		);
	}
}