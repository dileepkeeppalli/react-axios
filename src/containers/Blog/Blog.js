import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state ={
        Posts: [
            // {title: "Title 1", author: "Dileep"},
            // {title: "Title 2", author: "Sharad"},
            // {title: "Title 3", author: "Bharat"},
            // {title: "Title 4", author: "Ritesh"},
            // {title: "Title 5", author: "Pavithra"}
        ],
        postId: null 
    };

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                console.log("Posts>" + response);
                const data = response.data.slice(0, 3);
                this.setState({Posts: data})
            })
            .catch(error => {
                console.log("Errors>" + error);
            });
    };

    selectedPost = (id) => {
        this.setState({postId: id});
    };

    render () {
        const posts = this.state.Posts.map(post => {
            return <Post title={post.title} author={post.author} clicked={() => this.selectedPost(post.id)}/>
        });
        return (
            <div>
                <section className="Posts" >
                    {posts}
                </section>
                <section>
                    <FullPost postId={this.state.postId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;