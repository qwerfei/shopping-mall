import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  mouseIn: false,
  currentIndex: 0,
  navList: []
})

export default(state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.NAV_MOUSEIN:
      return state.merge({
        mouseIn: true,
        currentIndex: action.index
      });
    case actionTypes.NAV_MOUSEOUT:
      return state.set('mouseIn', false);
    case actionTypes.GET_NAVINFO:
      return state.set('navList', action.navList);
    default:
      return state;
  }
}