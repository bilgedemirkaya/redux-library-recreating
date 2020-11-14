export const RECEIVE_USERS = 'RECEIVE_USERS'


// we created an action which only takes users and add a type in it.
export default function receiveUsers (users) {
    return {
        type : RECEIVE_USERS,
        users,
    }
}