import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import NavTops from './components/navtop'
import { 
DetailWrapper,
Nav,
NavButton,
Section
} from './style';

class Detail extends Component {
  render() {
    const { list } = this.props
    return (
      <DetailWrapper>
        <NavTops />
        <Nav>
          <NavButton>加入购物车</NavButton>
        </Nav>
        {
          list.map((item, index) => {
            return (
              <Section 
                className='section' 
                imgUrl={item.img}
                key={item.id}
              >
                <h2>{item.title}</h2>
                <p className='desc' >{item.desc}</p>
                <p className='content' >{item.content}</p>
              </Section>
            )
          })
        }
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetailInfo(this.props.match.params.id);
    window.addEventListener('scroll', this.showText);
  }

  // componentDidUpdate() {
  //   this.props.getDetailInfo(this.props.match.params.id)
  // }

  componentWillUnmount() {
		window.removeEventListener('scroll', this.showText);
	}
  
  showText() {
    const section = document.getElementsByClassName('section');
    for (let i =0; i<section.length ; i++) {
      if (section[i].getBoundingClientRect().top < 220) {
        section[i].classList.add("visible");
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['detail', 'list'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    //商品详细信息ajax获取
    getDetailInfo(id) {
      dispatch(actionCreators.getDetail(id))
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Detail);