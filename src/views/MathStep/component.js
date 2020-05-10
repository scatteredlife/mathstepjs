import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostForm from '../../components/PostForm'
import PostList from '../../components/PostList'
import solveEquation from '../../mathstep/lib/solveEquation'


class Blog extends Component {
    testSolve = (equationString, outputStr, debug=false) => {
        const steps = solveEquation(equationString, debug);
        let lastStep;
        if (steps.length === 0) {
            lastStep = [];
        }
        else {
            lastStep = steps[steps.length -1].newEquation.ascii();
        }
        
        for(var i = 0; i< steps.length; i++) {
            console.log(steps[i].newEquation.ascii())
        }
    }
    
    render() {
        const {
            blog,
            setPostFormAttribute,
            submit
        } = this.props
        console.log(this.testSolve('3x^2 - 6x + 3 = 0'))
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