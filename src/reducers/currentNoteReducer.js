export default function currentNoteReducer(state="", action){
  switch (action.type) {
    case 'ADD_NOTE':
      return action.payload.id
    case 'UPDATE_CURRENT_NOTE':
      return action.payload
    default:
      return state
  }
}
