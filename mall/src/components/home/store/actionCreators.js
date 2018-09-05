import * as actionTypes from './actionTypes'
// import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (result) => ({
	type: actionTypes.GET_HOMEINFO,
	recommendList: result.recommendList[0].list
});

export const getHome = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			console.log(result.recommendList[0].list);
			// console.log(result.sideshow[0].img);
			dispatch(changeList(result));
		}).catch(() => {
			console.log('error');
		})
	}
}