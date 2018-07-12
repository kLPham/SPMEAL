//SET THE INITIAL STATE IN REDUCER:
const initialState = {
  ProteinSize: '3oz',
  Carb: 'Carb-Free',
  CarbSize: '1/2 Cup',
  Veggies: 'No Veggies',
  VeggieSize: '20z',
  // quantity: {},
  SaveSelectedValue: []
};

//ACTION TYPES:
const UPDATE_PROTEIN_SIZE = 'UPDATE_PROTEIN_SIZE';
const UPDATE_CARB = 'UPDATE_CARB';
const UPDATE_CARB_SIZE = 'UPDATE_CARB_SIZE';
const UPDATE_VEGGIES = 'UPDATE_VEGGIES';
const UPDATE_VEGGIE_SIZE = 'UPDATE_VEGGIE_SIZE';
// const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const UPDATE_SAVE_SELECTED_VALUE = 'UPDATE_SAVE_SELECTED_VALUE';

function selectReducer(state = initialState, action) {
  console.log('REDUCER: Action ->', action);
  switch (action.type) {
    case UPDATE_PROTEIN_SIZE:
      return Object.assign({}, state, { ProteinSize: action.payload });

    case UPDATE_CARB:
      return Object.assign({}, state, { Carb: action.payload });

    case UPDATE_CARB_SIZE:
      return Object.assign({}, state, { CarbSize: action.payload });

    case UPDATE_VEGGIES:
      return Object.assign({}, state, { Veggies: action.payload });

    case UPDATE_VEGGIE_SIZE:
      return Object.assign({}, state, { VeggieSize: action.payload });
    // case UPDATE_QUANTITY:
    //   return Object.assign({}, state, { QuantityById: action.payload });
    case UPDATE_SAVE_SELECTED_VALUE:
      return Object.assign({}, state, { SaveValue: action.payload });
    default:
      return state;
  }
}

//ACTION CREATORS:
export function updateProteinSize(ProteinSize) {
  return {
    type: UPDATE_PROTEIN_SIZE,
    payload: ProteinSize
  };
}

export function updateCarb(Carb) {
  return {
    type: UPDATE_CARB,
    payload: Carb
  };
}

export function updateCarbSize(CarbSize) {
  return {
    type: UPDATE_CARB_SIZE,
    payload: CarbSize
  };
}

export function updateVeggies(Veggies) {
  return {
    type: UPDATE_VEGGIES,
    payload: Veggies
  };
}

export function updateVeggieSize(VeggieSize) {
  return {
    type: UPDATE_VEGGIE_SIZE,
    payload: VeggieSize
  };
}
// export function updateQuantity(QuantityById) {
//   return {
//     type: UPDATE_QUANTITY,
//     payload: QuantityByid
//   };
// }

export function updateSaveSelectedValue(SaveValue) {
  return {
    type: UPDATE_SAVE_SELECTED_VALUE,
    payload: SaveValue
  };
}

export default selectReducer;
