import * as React from 'react'
import {useSelector,useDispatch, Provider} from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LeaderBoard from './Leaderboard'
import DashBoard from './Dashboard'
import {BrowserRouter as Router} from 'react-router-dom'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authedUser === null)

  React.useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  return (
    <Router>
    <div className="container">
      {loading ? <h1>Loading...</h1> : <DashBoard />}
    </div>
    </Router>
  )
}