import styled from 'styled-components'

export const NavWrapper = styled.nav`
  width: 1280px;
  height: 100px;
  margin: 0 auto;
  font-size: 16px;
`

export const NavList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

export const NavItem = styled.li`
  flex: 1;
  height: 100px;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
  &:hover a{
    color: #ff6700
  }
`
export const ItemList = styled.ul`
  position: absolute;
  top: 100px;
  left: 0;
  display: flex;
  width: 100%;
  background: #fff;
`
export const Item = styled.li`
  width: 20%;
  padding-bottom: 20px;
  img {
    width: 100%;
    margin: 0 auto;
    height: 150px;
    border-left: 1px solid #ccc;
  }
  .name, .price {
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .name {
    color: #333;
  }
  &:first-of-type img{
    border-color: transparent
  }
`