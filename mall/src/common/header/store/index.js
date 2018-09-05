import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as actionTypes from './actionTypes';

//index可以间接导出当前文件夹下面的reducer, actionCreators, actionTypes，以缩短路径
export { reducer, actionCreators, actionTypes};