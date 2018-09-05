import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  list: [],
  showNav: false
})

export default(state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAIL:
      return state.set('list', action.list);
    case actionTypes.TOGGLE_NAVTOP:
      // console.log(action.show)
      return state.set('showNav', action.show);
    default:
      return state;
  }
}
