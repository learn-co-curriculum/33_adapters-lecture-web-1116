import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'

class LoginForm extends Component {

  constructor(){
    super()
    this.state = {username: '', password: ''}
  }

  handleLogin(e){
    e.preventDefault()
    this.props.loginUser(this.state)
  }

  handleChange(e){
    let newState = Object.assign({}, this.state)
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render(){
    return(
      <form onSubmit={this.handleLogin.bind(this)}>
        <input type="text" name='username' value={this.state.username} onChange={this.handleChange.bind(this)} />
        <input type="password" name='password' value={this.state.password} onChange={this.handleChange.bind(this)} />
        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    loginUser: function(user){
      let action = loginUser(user)
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
