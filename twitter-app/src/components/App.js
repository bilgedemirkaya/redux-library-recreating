import * as React from 'react'
import {useSelector} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import {useDispatch} from 'react-redux'


export default function App () {
  const dispatch = useDispatch()
  const store = useSelector((state) => state)

  React.useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])


  return (
    <div className='container'>
    
    </div>
  )
}