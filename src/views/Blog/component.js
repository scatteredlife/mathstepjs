import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostForm from '../../components/PostForm'
import PostList from '../../components/PostList'

class Blog extends Component {
    render() {
        const {
            blog,
            setPostFormAttribute,
            submit
        } = this.props

        const form = (
            <div>
                <PostForm 
                    title={blog.title} 
                    imageURL={blog.imageURL} 
                    content={blog.content} 
                    setAttribute={setPostFormAttribute}
                    submit={submit}
                />
                <PostList posts={blog.items} />
            </div>
        )
        return form
    }
}

Blog.propTypes = {
    blog: PropTypes.object,
    setPostFormAttribute: PropTypes.func
}

export default Blog