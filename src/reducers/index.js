import {combineReducers} from 'redux'

import notesReducer from './notesReducer'
import currentNoteReducer from './currentNoteReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  currentNote: currentNoteReducer,
  user: userReducer
})

// state {
// note: [], // all the notes,
// currentNote: // id of the selected note
// }

export default rootReducer
