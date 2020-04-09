import * as actions from './actions'
import c from './constants'
import configureMockStore from 'redux-mock-store'
import reducer from './reducer'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('Set attribute test', () => {
  const expectedAction = {
    type: c.SET_ATTRIBUTE,
    key: 'title',
    value: 'test'
  }
  expect(actions.setPostFormAttribute('title', 'test'))
    .toEqual(expectedAction)
});


test('Add post action test', () => {
  const store = mockStore({
    blog: {
      items: [],
      form: {
        key: 'title',
        value: 'test'
      }
    }
  })

  const expectedPayload = { type: c.ADD_POST, data: {
    key: 'title',
    value: 'test'
  }}

  store.dispatch(actions.submit())

  const finalAction = store.getActions()[0]
  
  expect(finalAction).toEqual(expectedPayload)
});

test('Add post reducer test', () => {
  const initialState = {
    form: {
    },
    items: [],
  }

  expect(
    reducer(initialState, {
      type: c.ADD_POST,
      data: {
        title: 'title'
      }
    })).toEqual(
      {
        form: {
        },
        items: [{
          title: 'title'
        }]
      }
    )
  
});


