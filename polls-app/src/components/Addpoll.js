import * as React from 'react'
import { handleAddPoll } from '../actions/polls'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function AddPoll () {
    const history = useHistory()
    const dispatch = useDispatch()

    const [option,setOption] = React.useState(
        {a:"",b:"",c:"",d:""}
    )

    const [question,setQuestion] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/')
        dispatch(handleAddPoll({
            question,
            ...option,
        }))

    }

    const handleInputChange = ({target}) =>{
        const { value, name} = target

        setOption({
            ...option,
            [name] : value,
        })

    }
    const isDisabled = () => {
        return question === '' 
        || option.a === ''
        || option.b === ''
        || option.c === ''
        || option.d === ''

    }

    return(
        <form className='add-form' onSubmit={handleSubmit}>
        <h3 style={{marginBottom: 5}}>What is your question?</h3>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          name='question'
          className="input"
          type="text"
        />
  
        <h3>What are the options?</h3>
  
        <label className="label" htmlFor="input">A.</label>
        <input
          value={option.a}
          onChange={handleInputChange}
          name='a'
          className="input"
          type="text"
        />
  
        <label className="label" htmlFor="input">B.</label>
        <input
          value={option.b}
          onChange={handleInputChange}
          name='b'
          className="input"
          type="text"
        />
  
        <label className="label" htmlFor="input">C.</label>
        <input
          value={option.c}
          onChange={handleInputChange}
          name='c'
          className="input"
          type="text"
        />
  
        <label className="label" htmlFor="input">D.</label>
        <input
          value={option.d}
          onChange={handleInputChange}
          name='d'
          className="input"
          type="text"
        />
  
        <button className='btn' type='submit' disabled={isDisabled()}>
          Submit
        </button>
      </form>
    )
  }