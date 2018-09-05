import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
LoginWrapper,
LoginContnt,
LoginBox,
LoginTitle,
Input,
Button,
LinkItem
} from './style'

class Login extends Component {
    render() {
        return (
          <LoginWrapper>
            <LoginContnt>
              <LoginTitle>账号登陆</LoginTitle>
              <LoginBox>
                <Input placeholder='账号' />
                <Input placeholder='密码' type='password'/>
                <Button>登陆</Button>
                <LinkItem>
                  <span className='item'>忘记密码</span>
                  <Link to='/register'>
                    <span className='item'>免费注册</span>
                  </Link>
                </LinkItem>
              </LoginBox>
            </LoginContnt>
          </LoginWrapper>
        )
    }
}

export default Login