import React from 'react'
import { connect } from 'react-redux'

import { addNote } from '../actions'

class NoteCreate extends React.Component {

  constructor(props){
    super(props)
    this.state = {note: ''}
  }

  handleInputChange(event){
    this.setState({
      note: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addNote( this.state.note )
    this.setState({note: ''})
  }

  render(){
    return (
      <div>
        <h3>Add a Note</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.handleInputChange.bind(this)} value={this.state.note}/>
          <input type='submit' />
        </form>
      </div>)
  }
}

function mapDispatchToProps( dispatch ){
  return {
    addNote: function(note){
      let action = addNote( note )
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps)( NoteCreate )
