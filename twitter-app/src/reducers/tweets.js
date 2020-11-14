import { RECEIVE_TWEETS } from '../actions/tweets'

export default function receivetweets (state= {}, action) {
        switch(action.type) {
            case RECEIVE_TWEETS:
                return {
                    ...state,
                    ...action.tweets
                }
            default: 
            return state
        }
}