import * as React from 'react'
import {useSelector,useDispatch, Provider} from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LeaderBoard from './Leaderboard'
import DashBoard from './Dashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddPoal from './Addpoll'
import Nav from './Nav'
import Poll from './Poll'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authedUser === null)

  React.useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch])

  return (
    <Router>
    <div className="container">
    <Nav />
      {loading ? <h1>Loading...</h1> : <div>
              <Route path='/' exact>
                <DashBoard />
              </Route>
              <Route path='/leaderboard'>
                <LeaderBoard />
              </Route>
              <Route path='/polls/:id'>
                <Poll />
              </Route>
              <Route path='/add'>
                <AddPoal />
              </Route>
            </div>}
    </div>
    </Router>
  )
}