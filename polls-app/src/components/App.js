import * as React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function App() {
  const authed = useSelector((state) => state.authedUser)
  const store = useSelector((store) => store)
  console.log(store)
  console.log(authed)
  return (
    <div>
      Redux Polls
    </div>
  )
}