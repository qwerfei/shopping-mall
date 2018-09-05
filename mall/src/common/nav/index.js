import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { 
NavWrapper,
NavList,
NavItem,
ItemList,
Item
} from './style';

class Nav extends Component {
  switchNavitemList(item, index){
    const { mouseIn, currentIndex } = this.props
    if(mouseIn && currentIndex === index) {
      return(
        <ItemList>
        {
          item.children.map((inneritem, index) => {
            return (
              <Item key={inneritem.id}>
                <object>
                  <Link to={'/detail/' + inneritem.id}>
                    <img src={inneritem.img} alt=''/>
                  </Link>
                </object>
                <div className='name'>{inneritem.name}</div>
                <div className='price'>{inneritem.price}</div>
              </Item>
            )
          })
        }
        </ItemList>
      )
    }else{
      return null
    }
  }

  render() {
    const { list, handleMouseEnter, handleMouseLeave } = this.props
    return (
      <NavWrapper>
        <NavList>
          {
            list.map((item, index) => {
              return (
                <NavItem 
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={'/category/' + item.id}>
                    <div>{item.title}</div>
                    {this.switchNavitemList(item, index)}
                  </Link>
                </NavItem>
              )
            })
          }
        </NavList>
      </NavWrapper>
    )
  }

  componentDidMount() {
    this.props.getNavList()
  }
}

const mapStateToProps = (state) => {
  return {
    mouseIn: state.getIn(['nav', 'mouseIn']),
    currentIndex: state.getIn(['nav', 'currentIndex']),
    list: state.getIn(['nav', 'navList']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    //导航信息显示于切换
    handleMouseEnter(index) {
      dispatch(actionCreators.switchList(index))
    },
    //导航信息隐藏
    handleMouseLeave() {
      dispatch(actionCreators.hideList())
    },
    //导航栏ajax获取
    getNavList() {
      dispatch(actionCreators.getNavList())
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Nav);