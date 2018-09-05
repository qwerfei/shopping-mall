import * as actionTypes from './actionTypes'
import axios from 'axios';

const changeList = (result) => ({
	type: actionTypes.GET_GOODSLIST,
	goodsList: result.list
});

export const getGoods = (id) => {
	return (dispatch) => {
		axios.get(`/api/good/${id}.json`).then((res) => {
			const result = res.data.data;
			console.log(result);
			dispatch(changeList(result));
		}).catch(() => {
			console.log('error');
		})
	}
};

export const getPriceState = (priceState) => ({
	type: actionTypes.GET_PRICESTATE,
	priceState: !priceState
});