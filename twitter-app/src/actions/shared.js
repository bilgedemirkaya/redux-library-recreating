export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export default function getData (data) {
    return {
        type: GET_INITIAL_DATA,
        data

    }
}