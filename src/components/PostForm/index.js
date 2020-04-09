import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostForm extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit()
    }

    render() {
        const {
            title,
            imageURL,
            content,
            submit,
            setAttribute
        } = this.props

        const form = (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" value={title} name="title" onChange={(e) => setAttribute('title', e.target.value)}/>
                <input type="submit" value="Submit" />
            </form>
        )
        return form
    }
}

PostForm.propTypes = {
    title: PropTypes.string,
    imageURL: PropTypes.string,
    content: PropTypes.string,
    submit: PropTypes.func
}

export default PostForm