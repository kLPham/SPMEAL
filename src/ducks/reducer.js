import axios from 'axios';

const POST_CART = 'POST_CART';
const GET_CART = 'GET_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(pro000duct) {
  return {
    type: POST_CART,
    payload: axios
      .post('/api/cart', pro000duct)
      .then(function(response) {
        console.log('cart from session', response.data);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}

export function refreshCart() {
  return {
    type: GET_CART,
    payload: axios
      .get('/api/cart')
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: axios
      .delete(`/api/cart/${id}`)
      .then(function(response) {
        console.log('remove from cart', response.data);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}

// Initial State
const initialState = {
  cart: [],
  isLoading: false
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_CART + '_PENDING':
      return Object.assign({}, state, { isLoading: true });
    case POST_CART + '_FULFILLED':
      console.log('post cart', action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        cart: action.payload
      });

    case REMOVE_FROM_CART + '_PENDING':
      return Object.assign({}, state, { isLoading: true });
    case REMOVE_FROM_CART + '_FULFILLED':
      console.log('in the remove case', action.payload);
      return Object.assign({}, state, {
        isLoading: false,
        cart: action.payload
      });

    case GET_CART + '_PENDING':
      return Object.assign({}, state, { isLoading: true });
    case GET_CART + '_FULFILLED':
      return Object.assign({}, state, {
        isLoading: false,
        cart: action.payload
      });

    default:
      return state;
  }
}
