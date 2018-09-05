import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
RegisterWrapper,
RegisterContnt,
RegisterBox,
RegisterTitle,
Input,
Button,
LinkItem
} from './style'

class Register extends Component {
    render() {
        return (
          <RegisterWrapper>
            <RegisterContnt>
              <RegisterTitle>新用户注册</RegisterTitle>
              <RegisterBox>
                <Input placeholder='请输入用户名' />
                <Input placeholder='请输入密码' type='password'/>
                <Input placeholder='再次输入密码' type='password'/>
                <Button>立即注册</Button>
                <LinkItem>
                  <Link to='/login'>
                    <span className='item'>已有账号，去登陆</span>
                  </Link>
                </LinkItem>
              </RegisterBox>
            </RegisterContnt>
          </RegisterWrapper>
        )
    }
}

export default Register