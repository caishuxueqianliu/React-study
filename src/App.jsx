import React from 'react'
//https://blog.csdn.net/weixin_44093239/article/details/95937437
// npm install -g cnpm --registry=https://registry.npm.taobao.org
//npm install --save core-js@^3
import {HashRouter,Route,Link} from 'react-router-dom'

import ReactTypes from 'prop-types'

// 导入需要的 Ant Design 组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

// 导入模块化的样式
import styles from './css/app.scss'

import Home from './components/Home.jsx'
import Movie from './components/Movie.jsx'
import About from './components/About.jsx'

export default class App extends React.Component{

        constructor(props){

          super(props)

          this.state={

          }
        }
static defaultProps={}
static propTypes={}

componentWillMount(){}
componentDidMount(){}

shouldComponentUpdate(nextProps,nextState){}

componentWillUpdate(nextProps,nextState){}
componentDidUpdate(preProps,preState){}
componentWillReceiveProps(nextProps){}
    render(){
      return  <HashRouter>
            <Layout className="layout" style={{ height: '100%' }}>

        {/* Header 头部区域 */}
        <Header>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="movie">
              <Link to="/movie/in_theaters/1">电影</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
        </Header>

        {/* 中间的 内容区域 */}
        <Content style={{ backgroundColor: '#fff', flex: 1 }}>
          <Route path="/home" component={Home}></Route>
          <Route path="/movie" component={Movie}></Route>
          <Route path="/about" component={About}></Route>
        </Content>

        {/* Footer 底部区域 */}
        <Footer style={{ textAlign: 'center' }}>
          传智播客 ©2017 黑马程序员
        </Footer>


      </Layout>
    </HashRouter>
    }


}