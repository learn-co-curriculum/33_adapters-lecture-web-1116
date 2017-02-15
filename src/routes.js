import React from 'react'
import {Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/App'
import NoteApp from './components/NoteApp'
import LoginForm from './components/LoginForm'
import About from './components/About'
import NoteShow from './components/NoteShow'

export default (
  <Route path='/' component={App}  >
    < IndexRoute component={NoteApp}  onEnter={authenticate}/>
    < Route path='notes' component={NoteApp}  onEnter={authenticate}>
      < Route path=':id' component={NoteShow} />
    < /Route>
    < Route path='about' component={About} />
    < Route path='login' component={LoginForm} />
  </Route>
)

function authenticate(){
  if (!sessionStorage.getItem('jwt')) {
    browserHistory.push('/login')
  }
}
