import styled from 'styled-components'

export const ContentWrapper = styled.section`
  width: 1280px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 620px;
  }
`

export const ListWrapper = styled.div`
  overflow: hidden;
`

export const ListTitle = styled.div`
  height: 50px;
  line-height: 50px;
  color: #d58717;
  font-weight: 400;
  font-size: 20px;
  border-bottom: 1px solid #d58717;
`

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px 0;
`

export const ListItem = styled.div`
  height: 480px;
  position: relative;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .6);
  .img {
    height: 358px;
    img {
      width: 100%;
      height: 100%;
      background-color:#C6D0D7;
      cursor: pointer
    }
  }
  .name {
    line-height: 26px;
    margin: 38px 0 0 48px;
    font-size: 1.17rem
  }
  .desc {
    line-height: 18px;
    margin: 3px 0 0 48px;
    color: rgba(51,51,51,0.7);
    font-size: 14px;
  }
  .price {
    position: absolute;
    right: 48px;
    bottom: 30px;
    margin: 0;
    color: #ff6700;
    font-size: 12px;
    font-weight: bold;
    strong {
      font-size: 30px
    }
  }
  &:hover {
    transform: translateY(-5px) ;
	  transition: all .2s linear;
  }
`