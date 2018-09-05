import * as actionTypes from './actionTypes'
import axios from 'axios';

const changeList = (result) => ({
	type: actionTypes.GET_DETAIL,
	list: result.list
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get(`/api/detail/${id}.json`).then((res) => {
			const result = res.data.data;
			// console.log(result.list);
			dispatch(changeList(result));
		}).catch(() => {
			console.log('error');
		})
	}
}

export const toggleTopShow = (show) => ({
	type: actionTypes.TOGGLE_NAVTOP,
	show
})