//全reducerの結合を行う
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
