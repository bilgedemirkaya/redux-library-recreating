import {combineReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import polls from './polls'
import { loadingBarReducer } from 'react-redux-loading'
import answers from  './answers'

export default combineReducers({
    authedUser,
    users,
    loadingBar: loadingBarReducer,
    polls,
    answers,
})