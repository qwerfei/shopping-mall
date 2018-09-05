import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: #ddd;
`

export const LoginContnt = styled.div`
	width: 400px;
  margin: 100px auto;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.3);
`

export const LoginTitle = styled.div`
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 700;
  color: #666;
`
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:20px;
`

export const Input = styled.input`
  box-sizing: border-box;
	width: 300px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
  margin-bottom: 20px;
`

export const Button = styled.div`
	width: 300px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	text-align: center;
  cursor: pointer;
`

export const LinkItem = styled.div`
	font-size: 12px;
  color: #666;
  text-align: right;
  width: 300px;
  margin: 20px auto;
  .item {
    padding-left:20px;
    cursor: pointer;
    &:hover {
      color: #3194d0;
    }
  }

`