import {RECEIVE_USERS} from '../actions/users'

// we will get this func with an action our hand. 
// it will carry a type of action as well as the users property which carries our users data 
export default function receiveUsers (state = {}, action) {
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users} // so just return to previous state(store from redux) and users property in the action 
        default: 
            return state
    }
}