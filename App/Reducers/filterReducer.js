const initialState = "All";

const SET_FILTER = "SET_FILTER";

export default function filterReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

export function setFilter(value){
  return {
    type: SET_FILTER,
    value
  }
}