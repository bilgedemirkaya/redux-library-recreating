import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo (todo) {
    return {
    type: ADD_TODO,
    todo,
    }
}

function removeTodo (id) {
    return {
    type: REMOVE_TODO,
    id,
    }
}

function toggleTodo (id) {
    return {
    type: TOGGLE_TODO,
    id,
    }
}

export function handleDeleteTodo(todo){
    // this time in this action creator, we need to return not just an object but we need to invoke a function 
    //so instead, we return a function.
    return (dispatch) => {
         // delete from UI
         dispatch(removeTodo(todo.id)) // this time we pass dispatch in the function as parameter 
        // delete from server
        return API.deleteTodo(todo.id)
        .catch(() => { // if an error
           dispatch(addTodo(todo))  // add it back
           alert('Error occured, try again.')
         })
    }
}

export function handleAddTodo(name,cb){
    return (dispatch) => {
        return API.saveTodo(name) // add todo in server and return us a new todo with id name and complete properties
        .then ((todo) => {                   
            dispatch(addTodo(todo)) // will add the new todo item in UI
            cb() // reset the value of input
        })
        .catch(() => alert('There was an error. Try again.'))
    }
}
export function handleToggle(id){
    return (dispatch) => {
        dispatch(toggleTodo(id))
        return API.saveTodoToggle(id)
        .catch(() => {
           dispatch(toggleTodo(id)) 
           alert('Error toggling')
       })
    }
}
