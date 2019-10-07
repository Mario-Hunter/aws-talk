import React from 'react';
import '../css/Blog.css';

export default class Blog extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	posts: []
        }
    }
    componentWillMount =()=>{

    	let id = window.localStorage.getItem("id")
    	let token = window.localStorage.getItem("token")

    	var data = null;
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.addEventListener("readystatechange", (event)=> {
			// console.log(event)
			if (event.target.readyState === 4) {
				let res = JSON.parse(event.target.response);
				console.log(res)
				this.setState({id, token, posts: res.data})
			}
		});
		xhr.open("GET", `http://localhost:8000/api/v1/users/${id}/posts`);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader("cache-control", "no-cache");
		if(token && id){

			xhr.send(data);
		} else{
			window.localStorage.clear();
		}
		
    }
    addPost = ()=>{
    	let {id, newPost, newTitle, posts} = this.state;
  //   	var data = new FormData();
		// data.append("title", "test");
		// data.append("content", "testcontent");
		// data.append("author_id", "1");

		// var xhr = new XMLHttpRequest();
		// xhr.withCredentials = true;

		// xhr.addEventListener("readystatechange", (e)=> {
		//   if (e.target.readyState === 4) {
		//     console.log(e.target.responseText);
		//   }
		// });

		// xhr.open("POST", "http://localhost:8000/api/v1/posts");
		// xhr.setRequestHeader("Accept", "application/json");
		// xhr.setRequestHeader("Content-Type", "application/json");
		// xhr.setRequestHeader("Authorization", "Bearer PszWY5O2Pr6bP15Kf3GgiNEZc4jfedT5dLkgUWWDZxecolOCIbICw3NuYhad");
		// xhr.setRequestHeader("cache-control", "no-cache");
		// xhr.setRequestHeader("Postman-Token", "3be25302-3af2-432c-a054-bb8570d3ca7e");

		// xhr.send(data);


    	let x = posts;
    	x.push({
    		title: newTitle,
    		content: newPost,
    		author_id: id,
    		thumbnail_id: "test",
    		posted_at: new Date().getTime()
    	})
    	this.setState({posts: x});
    }
	renderPosts =()=>{
		let {posts} = this.state;
		let arr = [];
		for(let i = 0; i < posts.length; i++){
			arr.push(
				<div key={i} className="post">
					<h3>{posts[i].title}</h3>
					<h6>{posts[i].content}</h6>
				</div>
			)
		}
		return arr;
	}
	//
	logout =()=>{
		window.localStorage.clear();
		window.location.reload();
	}
	render(){

		return (
			<div className="blogContainer">
				
				<div className="newPost">
					<input onChange={(event)=>this.setState({newTitle: event.target.value})} placeholder="Title"/>
					<textarea onChange={(event)=>this.setState({newPost: event.target.value})}/>
					<button onClick={this.addPost}>Post</button>
				</div>
				<div className="posts">
					{this.renderPosts()}
				</div>
				<button onClick={this.logout}>Logout</button>
			</div>
		);

	}
	
}
