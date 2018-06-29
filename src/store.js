// import { createStore } from 'redux';

// import reducer from './ducks/reducer';

// export default createStore(reducer);

import { createStore } from 'redux';
import reducer from './ducks/reducer';

// const rootReducer = combineReducers({
//   dropDown: reducer
// });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
