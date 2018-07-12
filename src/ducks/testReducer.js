//SET THE INITIAL STATE:

const initialState = {};

//ACTION TYPES:
const UPDATE_DUMMY = 'UPDATE_DUMMY';

function testReducer(state = initialState, action) {
  console.log('TESTREDUCER: Action ->', action);
  switch (action.type) {
    case UPDATE_DUMMY:
      return Object.assign({}, state, { dummy: action.payload });
    default:
      return state;
  }
}

//ACTION CREATORS:
export function updatedummy(dummies) {
  return {
    type: UPDATE_DUMMY,
    payload: dummies
  };
}

export default testReducer;
