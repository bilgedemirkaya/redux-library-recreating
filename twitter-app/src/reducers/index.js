// here we need to combine reducers we get 

import {combineReducers} from 'redux'
import users from './users'
import autheduser from './autheduser'
import tweets  from './tweets'

export default combineReducers({
    autheduser,
    users,
    tweets
})
// when you have combined your reducer, you need to create a store also