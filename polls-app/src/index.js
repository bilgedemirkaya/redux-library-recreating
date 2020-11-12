import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers' // it will go to combinereducers

function ColorfulBorder() {
  return (
    <React.Fragment>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--white)' }} />
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--white)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--white)' }} />
      </ul>
    </React.Fragment>
  )
}

const store = createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <ColorfulBorder />
    <App />
  </Provider>,
  document.getElementById('root')
)