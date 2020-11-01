
// updating the state 
function todos(state = [], action){
    switch(action.type){
        case 'ADD_TODO':
            // the reason we didn't use push is, bcs this function should be a pure funtion. 
            //Not modifying the existing state but returning a new one.
            return state.concat([action.todo])
        case 'REMOVE_TODO':
            // it will loop over each item in the state array, and filter one out
            return state.filter((todo) => todo.id !== action.id)
        case 'TOGGLE_TODO':
            // instead of hard coding each property we want to toggle, 
            //object.assign which allows us to merge different objects together
            return state.map((todo) = todo.id !== action.id ? todo : 
            Object.assign({},todo,{complete: !todo.complete}))
            // says create me brand new object, get and merge todo object, but change the complete property
        default:
            return state;
            }  
    }
function goals(state = [], action){
    switch(action.type){
        case 'ADD_GOAL':
            return state.concat([action.goal])
        case 'REMOVE_GOAL':
            return state.filter((goal) => goal.id !== action.id)
        default: 
            return state;
    }
}

function app(state={},action){
    return{
        todos: todos(state.todos,action),
        goals: goals(state.goals,action)
    }
}

function createStore(reducer){
    // store should have 4 parts 
    // 1. state
    // 2. get state
    // 3. listen to changes of states
    // 4. update the state

    let state;
    let listeners = []

    const getState = () => state;

    // when a user calls subscribe passing it a function, that function is goind to be pushed on our listeners array
    // but then, if the user calls this function that was returned to them when they call subscribe, ehat is going to happen is 
    // we are going to filter our listeners array, just remove the initial function that we just passed in when they first invoked subscribe.
    // so if we do const unsubscribe = store.subscribe() etc , it will return the unsubscribed array.
    
    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    // it takes the action, calls the reducer functions which updates the state, notify the listeners
    const dispatch = (action) => {
        // in here we call the reducer function but now we don't have a single function but two: goal and todo
        // so we need to make another function which gives us both functions with one funct.
        state = reducer(state,action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}

const store = createStore(app)

store.subscribe(() => {
    console.log("THE NEW STATE IS", store.getState())
})

store.dispatch({
    type: 'ADD_TODO',
    todo: {
      id: 0,
      name: 'Walk the dog',
      complete: false,
    }
  })
  store.dispatch({
    type: 'ADD_GOAL',
    goal: {
      id: 0,
      name: 'Learn Redux'
    }
  })