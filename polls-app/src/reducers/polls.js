import {RECEIVE_POLLS, ADD_POLL} from '../actions/polls'
import {ADD_ANSWER} from '../actions/answers'

export default function polls (state={},action) {
    switch(action.type){
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            }
        case ADD_POLL:
            return {
                ...state,
                [action.poll.id] : action.poll
            }
        case ADD_ANSWER:
            const {authedUser,id,answer} = action
            const poll = state[id]
            const keyVotes = answer + 'Votes'
            return {
                ...state,
                [action.id]:{
                    ...poll,
                    [keyVotes] : poll[keyVotes].concat([authedUser]) // A vote will have all of the users voted for A exc exc
                }

            }
        default:
             return state
        }

}