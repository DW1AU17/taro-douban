import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import store from './store'

import './app.scss'
import { from } from 'rxjs';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#42BD56',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    // tabBar: {
    //   "list": [{
    //     "pagePath": "pages/index/index",
    //     "text": "首页"
    //   },{
    //     "pagePath": "pages/home/index",
    //     "text": "其他"
    //   }]
    // }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
