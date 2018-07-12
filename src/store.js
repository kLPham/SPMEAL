// import { createStore } from 'redux';
// import reducer from './ducks/reducer';
// export default createStore(reducer);

// const rootReducer = combineReducers({
//   dropDown: reducer
// });

import { createStore } from 'redux';
import selectReducer from './ducks/selectReducer';

const store = createStore(
  selectReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
