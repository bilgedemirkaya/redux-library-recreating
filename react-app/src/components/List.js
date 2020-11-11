import * as React from 'react'

export default function List (props){
    // props are; items, remove, toggle (for todo only)
    return (
        <ul>
             {props.items.map((item) => (
                 <li key={item.id}>
                  <span 
                  onClick={() => props.toggle /*if it is a todo item*/ && props.toggle(item.id)}
                  style={{textDecoration: item.complete ? 'line-through' : 'none'}}  > {item.name} </span> 
                  <button onClick={() => props.remove(item)
                     /* when clicked, it will pass the spesific item that should be removed from store */ }> x </button> 
                </li>
             ))}

        </ul>
    ) 
}