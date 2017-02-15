import React from 'react'

import { Link } from 'react-router'

import { connect } from 'react-redux'
import { fetchNotes, updateCurrentNote } from '../actions'

class NoteList extends React.Component {

  componentDidMount(){
    this.props.fetchNotes()
  }

  handleClick(noteId){
    this.props.updateCurrentNote(noteId)
  }

  render (){
    const notes = this.props.notes

    if (!notes.length) {
      return (<div>Loading</div>)
    }

    return (
      <div>
        <h2>All Notes</h2>
        <ul>
          { notes.map((note, i) =>
            <li key={i} onClick={ this.handleClick.bind(this, note.id)} >
              <Link to={`/notes/${note.id}`}>{ note.title  }</Link>
            </li>
          ) }
        </ul>
      </div>)
  }
}

function mapStateToProps (state){
  return {
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchNotes: function(){
      let action = fetchNotes()
      dispatch( action )
    },
    updateCurrentNote: function(noteId){
      let action = updateCurrentNote( noteId )
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( NoteList )
