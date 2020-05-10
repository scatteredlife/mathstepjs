import c from './constants'

import dotProp from 'dot-prop-immutable'

const initialState = {
    form: {
      title: 'all'
    },
    items: [],
  }
  

  const blog = (state = initialState, action) => {
    switch (action.type) {
        case c.SET_ATTRIBUTE:
            return dotProp.set(state, `form.${action.key}`, action.value)
        case c.ADD_POST:
            console.log(state)
            return dotProp.set(state, 'items', items => [...items, {
                ...action.data
            }])
        default:
            return state
    }
  }
  
  export default blog