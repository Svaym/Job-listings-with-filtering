const initialState  = {
  value: ''
}
export default function searchReducer(state=initialState, action) {
  switch (action.type) {
    case 'SEARCH_POSITION': {
      return {
        ...state, value: action.payload
      }
    }
    default:
      return state
  }
}