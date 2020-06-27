import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './style/iconfont/iconfont.css'; 

//引入页面
import Main from './pages/main';
import Message from './pages/message';
import Find from './pages/find';
import Mine from './pages/mine';


const App = () => (
  <BrowserRouter>
    <div>
      <div className='tabbar'>
        <div>
          <NavLink exact={true} to={"/"} activeClassName="selected">
            <i className='iconfont icon-shouye'></i>
            首页
          </NavLink>
        </div>
        <div>
          <NavLink to={"/find"} activeClassName="selected">
            <i className='iconfont icon-faxian'></i>
            发现
            </NavLink>
        </div>
        <div>
          <NavLink to={"/message"} activeClassName="selected">
            <i className='iconfont icon-xiaoxi'></i>
            消息
          </NavLink>

        </div>
        <div>
          <NavLink to={"/mine"} activeClassName="selected">
            <i className='iconfont icon-wode'></i>
            我的
          </NavLink>

        </div>
      </div>
      <div>
        <Switch>
        <Route path={"/"} exact={true} component={Main} />
        <Route path={"/find"} component={Find} />
        <Route path={"/message"} component={Message} />
        <Route path={"/mine"} component={Mine} />
        <Route render={()=>{return<div>404找不到</div>}}/>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
