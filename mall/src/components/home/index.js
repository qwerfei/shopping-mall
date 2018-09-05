import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { 
ContentWrapper,
ListWrapper,
ListTitle,
ListContent,
ListItem
} from './style';

class Home extends Component {
  render() {
    const { list} = this.props
    return (
      <ContentWrapper>
        <img src='http://i1.mifile.cn/a4/xmad_15360242598986_PalGz.jpg%202x' alt=''/>
        <ListWrapper>
          <ListTitle>推荐商品</ListTitle>
          <ListContent>
          {
            list.map((item, index) => {
              return (
                <ListItem key={index}>
                  <div className='img'>
                    <Link to={'/detail/' + item.id}>
                      <img src={item.img} alt=''/>
                    </Link>
                  </div>
                  <h3 className='name'>{item.name}</h3>
                  <p className='desc'>{item.desc}</p>
                  <p className='price'>
                    <strong>{item.price}</strong>元
                  </p>
                </ListItem>
              )
            })
          }
          </ListContent>
        </ListWrapper>
      </ContentWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeInfo()
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    //主页推荐列表ajax获取
    getHomeInfo() {
      dispatch(actionCreators.getHome())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Home);