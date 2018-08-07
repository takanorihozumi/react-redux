//全reducerの結合を行う
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
