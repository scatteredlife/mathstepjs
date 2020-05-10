import c from './constants'

export const submit = () => {
  return (dispatch, getState) => {
    const state = getState()
    const blog = state.blog

    return dispatch(addNewPost(blog.form))
  }
}

const addNewPost = data => ({
  type: c.ADD_POST,
  data
})

export const setPostFormAttribute = (key, value) => ({
  type: c.SET_ATTRIBUTE,
  key,
  value
})
