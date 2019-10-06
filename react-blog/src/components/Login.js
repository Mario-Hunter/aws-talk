import React from 'react';
import '../css/Login.css';

export default class Login extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        }
    }
	
	submit =()=>{
		let {email, password} = this.state;
		console.log(email, password)

        let url = `http://localhost:8000/api/v1/authenticate`;
        fetch(url, {
            method: 'POST',
            headers:{
                "Accept": "application/json",
            }, 
            body:{
            	email, password
            }
        }).then(function(response) {
            return response.json();
        }).then((myJson)=> {
            console.log(myJson)
        });
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