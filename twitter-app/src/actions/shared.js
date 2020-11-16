import { getInitialData } from '../utils/api'
import { receiveusers } from './users'
import { receivetweets } from './tweets'
import { setAuthedUser } from './autheduser'

const hodja = "tylermcginnis"

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users, tweets}) => {
            dispatch(receiveusers(users))
            dispatch(receivetweets(tweets))
            dispatch(setAuthedUser(hodja))
        })
    }
}