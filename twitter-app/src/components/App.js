import * as React from 'react'
import {useSelector} from 'react-redux'

export default function App () {
  const store = useSelector((state) => state)
  console.log(store)
  return (
    <div className='container'>
    </div>
  )
}