const initialState = [
  { name: "juan", age: 29, active: true },
  { name: "angie", age: 27, active: false },
  { name: "arley", age: 19, active: true }
];

const ADD_PERSON = 'ADD_PERSON';
const TOGGLE_PERSON_STATE = 'TOGGLE_PERSON_STATE';

export default function peopleReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.person];
    case TOGGLE_PERSON_STATE:
      const person = state[action.index];

      return [
        ...state.slice(0, action.index),
        Object.assign({}, person, { active: !person.active }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export function addPerson(person){
  return {
    type: ADD_PERSON,
    person
  }
}

export function togglePersonState(index){
  return {
    type: TOGGLE_PERSON_STATE,
    index
  }
}