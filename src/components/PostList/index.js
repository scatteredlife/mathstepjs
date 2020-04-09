import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from '../Post'

class PostList extends Component {
    render() {
        const {
            posts
        } = this.props

        const post = (
            <div className="post">
                {
                    posts.map((post, index) => (
                        <Post post={post} key={index}/>
                    ))
                }
            </div>
        )
        return post
    }
}

PostList.propTypes = {
    posts: PropTypes.array
}

export default PostList