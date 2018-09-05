import styled from 'styled-components'
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  width: 100%;
  height: 50px;
  /* min-width: 1280px; */
`

export const Logo = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 40px;
  background: url(${logoPic}) no-repeat;
	background-size: contain;
`

export const Nav = styled.div`
  display: flex;
  height: 50px;
  line-height: 50px;
`
export const NavItem = styled.div`
  width: 50px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  &.cart {
    width: 125px;
    height: 50px;
    background-color: #424242
    i {
      margin-right: 4px;
    }
    &:hover {
      color: #ff6700
    }
  }
  &:hover {
    color: #fff;
  }
`

export const CartInfo = styled.div`
  z-index: 1;
	position: absolute;
	right: 0;
	top: 50px;
	width: 240px;
  height: 100px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #eee;
  display: flex;
  align-items: center
  .info {
    color: #000
  }
`