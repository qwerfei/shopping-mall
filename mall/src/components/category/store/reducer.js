import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  goodsList: [],
  priceState: false
})

export default(state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_GOODSLIST:
      return state.set('goodsList', action.goodsList);
    case actionTypes.GET_PRICESTATE:
      return state.set('priceState', action.priceState);
    default:
      return state;
  }
}