import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
GoodsList,
GoodsItem
} from '../style';

class GoodLists extends PureComponent {
	render() {
    const { list } = this.props
		return (
      <GoodsList>
      {
        list.map((item) => {
          return (
            <GoodsItem key={item.id}>
              <Link to={'/detail/' + item.id}>
                <img src={item.img} alt='' />
              </Link>
              <div className='content'>
                <div className='name'>{item.name}</div>
                <div className='price'>¥{item.price}</div>
                <div className='cart'>加入购物车</div>
              </div>
            </GoodsItem>
          )
        })
      }
      </GoodsList>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['category', 'goodsList']),
  }
}

export default connect(mapStateToProps, null)(GoodLists);