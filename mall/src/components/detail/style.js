import styled from 'styled-components'

export const DetailWrapper = styled.div`
  font-size: 14px;
`

export const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  border-top: 1px solid #ccc;
`
export const NavTop = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavButton = styled.div`
  background: #ff6700;
  color: #fff;
  width: 118px;
  height: 28px;
  line-height: 28px;
  margin-right: 40px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
`

export const Section = styled.div`
  background: url(${(props) => props.imgUrl}) 50%  0 no-repeat;
  background-size: cover;
  color: #eee;
  width: 100%;
  height: 700px;
  text-align: center;
  h2 {
    font-size: 40px;
    padding-top: 1.8em;
    line-height: 1.2;
    margin-bottom: .4em;
    opacity: 0;
  }
  p {
    padding-top: 20px;
    opacity: 0; 
  }
  .content {
    font-size: 24px;
  }
  
  /* 动画效果封装 */
  &.visible {
    h2 {
      animation: move .5s cubic-bezier(0.25, 0.46, 0.33, 0.98);
      animation-fill-mode: forwards
    }
    .desc {
      animation: move .5s cubic-bezier(0.25, 0.46, 0.33, 0.98) .5s;
      animation-fill-mode: forwards
    }
    .content {
      animation: move .5s cubic-bezier(0.25, 0.46, 0.33, 0.98) 1s;
      animation-fill-mode: forwards
    }
  }

  @keyframes move {
    0%{
      opacity: 0;
      transform: translate3d(0, 60px, 0);
    }
    70%{
      opacity: 0.7;
      transform: translate3d(0, -5px, 0);
    }
    100%{
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`