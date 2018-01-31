'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory, Link } from 'react-router';

const Header = () => (
  <header>
    this is header
  </header>
);

const App = () => (
  <div className={'App'}>
    <h5 className="title">hello, yeoman apps! --- App</h5>
    <div>React Router: </div>
    <div><a href="#/list">列表 page</a></div>
    <div><a href="#/detail">详情 page</a></div>
    <Link to={'/detail'}>详情</Link>
  </div>
);

// var App = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h5 className="title">hello, yeoman apps!</h5>
//                 <div>React Router: </div>
//                 <div><a href="#/list">list page</a></div>
//                 <div><a href="#/detail">detail page</a></div>
//             </div>
//         );
//     }
// });

const List = () => (
  <div>
    <h5 className="title">hello, yeoman app! --- List</h5>
    <div><a href="#/">返回首页</a></div>
    <div>这是列表页</div>
  </div>
);
// var List = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h5 className="title">hello, yeoman app! --- List</h5>
//                  <div><a href="#/">返回首页</a></div>
//                 <div>这是列表页</div>
//             </div>
//         );
//     }
// });
const Detail = () => (
  <div>
    <h5 className="title">hello, yeoman app! --- Detail</h5>
    <div><a href="#/">返回首页</a></div>
    <div>这是详情页</div>
  </div>
);

// var Detail = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h5 className="title">hello, yeoman app! --- Detail</h5>
//                 <div><a href="#/">返回首页</a></div>
//                 <div>这是详情页</div>
//             </div>
//         );
//     }
// });

//最终渲染
ReactDom.render((
  <div>
    <Header></Header>
    <Router history={hashHistory}>
      <Route exact path='/' component={App}></Route>
      <Route path='/list' component={List} />
      <Route path='/detail' component={Detail} />
    </Router>
  </div>

), document.getElementById('app'));
