import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { 
NavTop,
NavButton
} from '../style';

class NavTops extends Component {
  render() {
    if (this.props.showNav) {
      return (
        <NavTop>
          <NavButton>加入购物车</NavButton>
        </NavTop>
      )
    }else {
      return null
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

  componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapStateToProps = (state) => {
  return {
    showNav: state.getIn(['detail', 'showNav'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    changeScrollTopShow() {
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (top > 150) {
        dispatch(actionCreators.toggleTopShow(true))
      }else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(NavTops);