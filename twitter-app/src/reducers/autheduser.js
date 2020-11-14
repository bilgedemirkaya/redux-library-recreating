import {SET_AUTHED_USER } from '../actions/autheduser'

export default function autheduser (state = null,  action) {
    switch(action.type) { 
        case SET_AUTHED_USER:
            return action.id // will just return to authed username
        default:
            return state
    }

}