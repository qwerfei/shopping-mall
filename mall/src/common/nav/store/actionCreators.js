import * as actionTypes from './actionTypes'
import axios from 'axios';

const changeNavList = (result) => ({
	type: actionTypes.GET_NAVINFO,
	navList: result.navList
});

export const switchList = (index) => ({
	type: actionTypes.NAV_MOUSEIN,
	index
});

export const hideList = () => ({
	type: actionTypes.NAV_MOUSEOUT
});

export const getNavList = () => {
	return (dispatch) => {
		axios.get('/api/nav.json').then((res) => {
			const result = res.data.data;
			// console.log(result.navList)
			// dispatch((result) => {
			// 	type = actionTypes.GET_NAVINFO,
			// 	navList = result.navList
			// });
			dispatch(changeNavList(result));
		}).catch(() => {
			console.log('error');
		})
	}
}