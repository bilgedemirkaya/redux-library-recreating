import * as React from 'react'
// import {useSelector} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import {useDispatch} from 'react-redux'
import Tweets from './Tweets'
 

export default function App () {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])


  return (
    <div className='container'>
      <Tweets /> 
    </div>
  )
}