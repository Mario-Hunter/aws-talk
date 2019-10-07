import React from 'react';
import '../css/Blog.css';

export default class Blog extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        }
    }
	renderPosts =()=>{
		let arr = [];
		for(let i = 0; i < 2; i++){
			arr.push(
				<div className="post">
					<h4>{i} - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</h4>
				</div>
			)
		}
		return arr;
	}
	render(){

		return (
			<div className="blogContainer">
				<div className="newPost">
					<textArea/>
					<button>Post</button>
				</div>
				<div className="posts">
					{this.renderPosts()}
				</div>
			</div>
		);

	}
	
}
