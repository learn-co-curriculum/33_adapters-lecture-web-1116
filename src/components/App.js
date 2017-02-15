import React, { Component } from 'react'

import NavBar from './NavBar'

export default class App extends Component {
  render(){
    return(
      <div>
        < NavBar href="/" title="Ima Fix Wolves"/>
        { this.props.children }
      </div>
      )
  }
}
