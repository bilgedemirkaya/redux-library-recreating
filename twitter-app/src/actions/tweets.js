
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export function receivetweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}