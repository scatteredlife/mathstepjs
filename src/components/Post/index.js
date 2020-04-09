import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class Post extends Component {
    render() {
        const {
            post
        } = this.props

        const item = (
            <div className="post">
                {post.title}
            </div>
        )
        return item
    }
}

Post.propTypes = {
    title: PropTypes.string,
    imageURL: PropTypes.string,
    content: PropTypes.string
}

export default Post