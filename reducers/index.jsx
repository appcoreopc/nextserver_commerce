import { combineReducers } from 'redux'
import users from './userReducer'
import items from './cartReducer'

export default combineReducers({
    users,
    items
  })
  