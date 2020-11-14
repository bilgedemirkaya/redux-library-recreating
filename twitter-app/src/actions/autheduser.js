export const SET_AUTHED_USER = 'SET_AUTHED_USER'

// this will just take username and add a type in it
export function authedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}