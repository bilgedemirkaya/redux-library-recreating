import * as React from 'react'
import List from './List'
import { handleAddGoal, handleDeleteGoal } from '../actions/goals'
import { useSelector, useDispatch } from 'react-redux'


export default function Goals () {
  const dispatch = useDispatch()
  const input = React.useRef('')
  // useRef is getting access to DOM nodes. 
  //If you pass the value you get from useRef as a ref prop on any React element, 
  //React will set the current property to the corresponding DOM node. 
  //This allows you to do things like grab input values or set focus.

  const goals = useSelector((state) =>state.goals)

  const addItem = (e) => {
    e.preventDefault()

    dispatch(handleAddGoal(
     input.current.value, //coming from useref
      () => input.current.value =''
    ))
  }
   const removeItem = (goal) => {
      dispatch(handleDeleteGoal(goal))
   }

  return (
    <div>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          ref={input}
        />
        <button onClick={addItem}>Add Goal</button>
        <List
          items={goals}
          remove={removeItem}
        />
      </div>
  )
}
