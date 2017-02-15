import notesAdapter from '../adapters/notesAdapter'



export function addNote(noteTitle){
  const note = notesAdapter.createNote({title: noteTitle, body: ''})

  return {
    type: 'ADD_NOTE',
    payload: note
  }
}

export function fetchNotes(){
  const notes = notesAdapter.fetchNotes()
  
  return {
    type: 'FETCH_NOTES',
    payload: notes
  }
}

export function updateCurrentNote(noteId){
  return {
    type: 'UPDATE_CURRENT_NOTE',
    payload: noteId
  }
}

export function updateNote(noteParams){

  notesAdapter.updateNote(noteParams)




  return {
    type: 'UPDATE_NOTE',
    payload: {
      id: noteParams.id,
      body: noteParams.note.body,
      title: noteParams.note.title
    }
  }
}

export function loginUser(loginParams){
  const user = noteAdapter.loginUser(loginParams)

    return {
      payload: user,
      type: 'LOGIN_USER'
    }
}
