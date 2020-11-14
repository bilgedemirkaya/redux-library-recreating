import { RECEIVE_USERS } from "./users"

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export default function receivetweets (tweets) {
    return {
        type: RECEIVE_USERS,
        tweets
    }
}