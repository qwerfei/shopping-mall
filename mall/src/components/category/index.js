import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Crumbs from './components/Crumb';
import FilterNavs from './components/FilterNav';
import FilterPrices from './components/FilterPrice';
import GoodLists from './components/GoodList';
import { 
CategoryWrapper,
Continer
} from './style';

class Category extends Component {
  render() {
    return (
      <CategoryWrapper>
        <Crumbs />
        <FilterNavs />
        <Continer>
          <FilterPrices />
          <GoodLists />
        </Continer>
      </CategoryWrapper>
    )
  }

  componentDidMount() {
    this.props.getGoodsList(this.props.match.params.id)
  }

  componentDidUpdate() {
    this.props.getGoodsList(this.props.match.params.id)
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    //商品信息ajax获取
    getGoodsList(id) {
      dispatch(actionCreators.getGoods(id))
    },
  }
}

export default connect(null, mapDispathToProps)(Category);