import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ScrollToTop from './base/scrollToTop';
import Header from './common/header';
import Footer from './common/footer';
import Nav from './common/nav';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Category from './components/category';
import Detail from './components/detail';
import Cart from './components/cart';
import OrderInfo from './components/orderIofo';
import OrderSucc from './components/ordersucc';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <div className="App">
              <Header />
              <Nav />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/register' exact component={Register}></Route>
              <Route path='/category/:id' exact component={Category}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/cart' exact component={Cart}></Route>
              <Route path='/orderinfo' exact component={OrderInfo}></Route>
              <Route path='/ordersucc' exact component={OrderSucc}></Route>
              <Footer />
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
