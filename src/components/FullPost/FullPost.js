import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state ={
        isPost : false,
        post: {}
    }

    componentWillReceiveProps(nextProps, nextState) {
        return nextProps.postId !== this.props.postId;
    }

    componentDidUpdate (){
        if(this.props.postId){
            if(this.state.post && this.state.post.id !== this.props.postId){
                axios.get('/posts/' + this.props.postId).then(response => {
                console.log('[Full Post Response]' + response);
                this.setState({post: response.data});
            }).catch(error => {
                this.setState({isPost: false});
            })
            }
            
        }
    }
    render () {
        
        let post = <p>Please select a Post!</p>;
        post = (
            <div className="FullPost">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.title}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullPost;