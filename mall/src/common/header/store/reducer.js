import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  mouseIn: false,
})

export default(state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CART_MOUSEIN:
      return state.set('mouseIn', true);
    case actionTypes.CART_MOUSEOUT:
      return state.set('mouseIn', false);
    default:
      return state;
  }
}