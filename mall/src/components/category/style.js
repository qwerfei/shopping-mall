import styled from 'styled-components'

export const CategoryWrapper = styled.section`
  width: 1280px;
  margin: auto;
`

export const Continer = styled.div`
  display: flex;
`

export const Crumb = styled.div`
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  background: #f5f5f5;
  color: #616161;
`

export const CrumbItem = styled.span`
  padding-left: 5px;
`

export const FilterNav = styled.ul`
  padding: 30px 0 ;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
`
export const FilterItem = styled.li`
  margin-right: 10px;
  padding-right: 10px;
  cursor: pointer;
  border-right: 1px solid #ccc;
  &.cur {
    color: #ee7a23;
  }
`
export const FilterPrice = styled.div`
  width: 230px;
  padding: 0 20px;
  margin-right: 25px;
  color: #605f5f;
  transition: right .5s ease-out;
`

export const PriceItem = styled.div`
  line-height: 1.2em;
  margin: 20px 0;
  padding: 5px 0;
  cursor: pointer;
  &.cur {
    font-weight: 700;
    transition: padding-left .3s ease-out;
    border-left: 2px solid #ee7a23;
    padding-left: 15px;
    color: #ee7a23;
  }
  &:hover{
    transition: padding-left .3s ease-out;
    border-left: 2px solid #ee7a23;
    padding-left: 15px;
    color: #ee7a23;
  }
`

export const GoodsList = styled.ul`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`

export const GoodsItem = styled.li`
  background: #fff;
  border: 2px solid #e9e9e9;
  box-shadow: 0 0 2px rgba(0, 0, 0, .6);
  margin: 20px 0;
  img {
    width: 100%;
    margin-top: 20px;
    cursor: pointer
  }
  .content {
    width: 90%;
    margin: 0 auto;
    .name {
      height: 20px;
      line-height: 20px;
      padding: 10px 0;
      font-weight: 700;
    }
    .price {
      line-height: 30px;
      color: #d1434a;
      font-size: 20px;
      padding-bottom: 10px;
    }
    .cart {
      border: 1px solid #d1434a;
      color: #d1434a;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin-bottom: 20px;
      cursor: pointer
    }
  }
  &:hover {
    transform: translateY(-5px) ;
    transition: all .5s ease-out;
    box-shadow: 0 0 10px #999;
    border-color: #ee7a23;
  }
`