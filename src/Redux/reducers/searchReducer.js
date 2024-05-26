
const initialState  = {
  searchPosition: ''
}
export default function searchReducer(state=initialState, action) {
  switch (action.type) {
    case 'SEARCH_POSITION': {
      return {
        ...state, searchPosition: action.payload
      }
    }
    default:
      return state
  }
}