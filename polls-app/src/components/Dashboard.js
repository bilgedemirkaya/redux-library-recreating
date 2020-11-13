import * as React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Dashboard () {
  const [list,setList] = React.useState('unanswered')
  const polls = useSelector((state) => state.polls)
  const users = useSelector((state) => state.users)
  const autheduser =  useSelector((state) => state.authedUser)
  const answers = users[autheduser].answers // how we check if user answered those questions

  const answered = answers.map((id) => polls[id]) //we get the answers and then related questions
  .sort((a,b) => b.timestamp - a.timestamp)
 
  const unanswered = Object.keys(polls)
  .filter((id) => !answers.includes(id)) // we get the unanswered questions
  .map((id) => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const questions = { answered, unanswered }

  return (
   <React.Fragment>
       <div className="dashboard-toggle">
           <button style={{
               textDecoration: list === 'unanswered' ?
               'underline' : null }}
               onClick={() => setList('unanswered')}> Unanswered
            </button>
            <span> | </span>
            <button style={{
               textDecoration: list === 'answered' ?
               'underline' : null }}
               onClick={() => setList('answered')}> Answered
            </button>
       </div>
       <ul className='dashboard-list'>
           {questions[list].map((poll) => {
            return <Link to={`polls/${poll.id}`}>
              <li key={poll.id}> {poll.question} </li>
            </Link>

           })}
       </ul>
   </React.Fragment>
  )
}