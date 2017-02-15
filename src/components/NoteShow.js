import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateNote, updateCurrentNote } from '../actions/'

class NoteShow extends Component {

  componentDidMount(){
    const id = parseInt( this.props.params.id )
    this.props.updateCurrentNote( id )
  }

  handleChange(event){
    const noteParams = {
      id: this.props.note.id,
      note: {
        body: event.target.value,
        title: this.props.note.title
      }
    }
    this.props.updateNote( noteParams )
  }

  render(){
    if ( !this.props.note ) {
      return (<div>Select or Add a Note to get started...</div>)
    }

    return (
      <div>
        <h2>{ this.props.note.title }</h2>
        < textarea className="full_width" type='text' value={ this.props.note.body } onChange={this.handleChange.bind(this)}/>
      </div>)
  }
}

function mapStateToProps(state, ownProps){
  const note = state.notes.find( note => note.id === state.currentNote )

  return {
    note: note
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateNote: function(noteParams){
      let action = updateNote( noteParams )
      dispatch(action)
    },
    updateCurrentNote: function(id){
      let action = updateCurrentNote(id)
      dispatch(action)
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)( NoteShow )
