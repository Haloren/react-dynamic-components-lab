//your code here
import React, { Component } from 'react';
// import BlogPost from './BlogPost';

export default class Comment extends Component {
    
    render() {
        console.log("Commet", this.props)
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        );
    }
}