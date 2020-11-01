// collection of actions to look which events going to occur in our event

{
    type: 'ADD_TODO',
    todo: {
      id: 0,
      name: 'Learn Redux',
      complete: false,
    }
  }
  {
    type: 'REMOVE_TODO',
    id: 0,
  }
  
  {
    type: 'TOGGLE_TODO',
    id: 0,
  }
  
  {
    type: 'ADD_GOAL',
    goal: {
      id: 0,
      name: 'Run a Marathon'
    }
  }
  
  {
    type: 'REMOVE_GOAL',
    id: 0
  }
}



function createStore(){
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

    return {
        getState
    }
}