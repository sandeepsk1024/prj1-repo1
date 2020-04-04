import {combineReducers} from 'redux'
import uiReducer from './reducer.ui'

export default combineReducers({
    ui: uiReducer
})