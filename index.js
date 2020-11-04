// library code
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

// app code
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addTodoAction (todo) {
    return {
      type: ADD_TODO,
      todo,
    }
  }
  
  function removeTodoAction (id) {
    return {
      type: REMOVE_TODO,
      id,
    }
  }
  
  function toggleTodoAction (id) {
    return {
      type: TOGGLE_TODO,
      id,
    }
  }
  
  function addGoalAction (goal) {
    return {
      type: ADD_GOAL,
      goal,
    }
  }
  
  function removeGoalAction (id) {
    return {
      type: REMOVE_GOAL,
      id,
    }
  }

// updating the state 
function todos(state = [], action){
    switch(action.type){
        case ADD_TODO:
            // the reason we didn't use push is, bcs this function should be a pure funtion. 
            //Not modifying the existing state but returning a new one.
            return state.concat([action.todo])
        case REMOVE_TODO:
            // it will loop over each item in the state array, and filter one out
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
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
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter((goal) => goal.id !== action.id)
        default: 
            return state;
    }
}

// combine reducers
function app(state={},action){
    return{
        todos: todos(state.todos,action),
        goals: goals(state.goals,action)
    }
}

const store = createStore(app)

store.subscribe(() => {
    console.log("THE NEW STATE IS", store.getState())
})

store.dispatch(addTodoAction({
    id: 0,
    name: 'Walk the dog',
    complete: false,
  }))
  
  store.dispatch(addTodoAction({
    id: 1,
    name: 'Wash the car',
    complete: false,
  }))
  
  store.dispatch(addTodoAction({
    id: 2,
    name: 'Go to the gym',
    complete: true,
  }))
  
  store.dispatch(addGoalAction({
    id: 0,
    name: 'Learn Redux'
  }))
  
  store.dispatch(addGoalAction({
    id: 1,
    name: 'Lose 20 pounds'
  }))