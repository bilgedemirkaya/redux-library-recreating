

import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from '../actions/todos'
import { RECEIVE_DATA } from "../actions/shared"


export default function todos(state = [], action){
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
            return state.map((todo) => todo.id !== action.id ? todo :
                Object.assign({}, todo, {complete: !todo.complete})
            )
            // says create me brand new object, get and merge todo object, but change the complete property
        case RECEIVE_DATA:
            return action.todos // get the array of todos from API

        default:
            return state;
            }  
    }