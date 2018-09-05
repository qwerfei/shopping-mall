import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { 
FilterNav,
FilterItem
} from '../style';

class FilterNavs extends PureComponent {
	render() {
    const {changePriceState, priceState} = this.props
		return (
      <FilterNav>
        <FilterItem>推荐</FilterItem>
        <FilterItem 
          onClick={() =>{changePriceState(priceState)}}
          className='cur'
        >
          <span>价格</span>
          <i className={priceState? 'iconfont icon-shangsheng' : 'iconfont icon-xiajiang'}></i>
        </FilterItem>
      </FilterNav>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    priceState: state.getIn(['category', 'priceState']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    changePriceState(priceState) {
      dispatch(actionCreators.getPriceState(priceState))
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(FilterNavs);