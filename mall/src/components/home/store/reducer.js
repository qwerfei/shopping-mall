import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  recommendList: []
})

export default(state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOMEINFO:
      return state.set('recommendList', action.recommendList);
    default:
      return state;
  }
}