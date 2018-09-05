import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { 
HeaderWrapper,
Logo,
Nav,
NavItem,
CartInfo
} from './style';


class Header extends Component {
  //购物车信息内容
  getCartInfo(){
    const { mouseIn } = this.props
    if(mouseIn) {
      return(
        <CartInfo>
          <span className='info'>购物车中还没有商品，赶紧选购吧!</span>
        </CartInfo>
      )
    }else{
      return null
    }
  }

  render() {
    const { handleMouseEnter, handleMouseLeave } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/login'>
            <NavItem>登陆</NavItem>
          </Link>
          <Link to='/register'>
            <NavItem>注册</NavItem>
          </Link>
          <Link to='/cart'>
            <NavItem 
              className="cart"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <i className="iconfont icon-gouwuchekong"></i>
              购物车(0)
              {this.getCartInfo()}
            </NavItem>
          </Link>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    //显示购物车信息
    handleMouseEnter() {
      dispatch(actionCreators.showcart())
    },
    //隐藏购物车信息
    handleMouseLeave() {
      dispatch(actionCreators.hidecart())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);