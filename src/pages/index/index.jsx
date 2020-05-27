import Taro, { Component } from "@tarojs/taro"
import { View, ScrollView } from "@tarojs/components"
import { AtListItem, AtTabBar } from 'taro-ui'
// import { connect } from '@tarojs/redux'
// import { add, minus, asyncAdd } from '../../store/actions/todos'

import { hotMovie } from "../../apis"
import MovieItem from '../../components/movie_item/index'
import Home from '../home'
import Hot from '../hot'
import Mine from '../mine'

import "./index.scss"

export default class Index extends Component {
  state = {
    obj: {
      img: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578705064.jpg',
      title: "理查德·朱维尔的哀歌",
      average: 8.2
    },
    current: 0
  }

  config = {
    navigationBarTitleText: "首页"
  }

  // componentDidMount() {
  //   this.getHotMoive()
  // }

  // async getHotMoive() {
  //   let res = await hotMovie()
  //   console.log(res)
  // }

  handleClick(val) {
    this.setState({
      current: val
    })
  }

  render() {
    let arr = [1, 2, 3, 4, 5]
    let { current, obj } = this.state
    return (
      <View class="index-page">
        {/* {
          current === 0 && arr.map(i => (
            <View key={i}>
              <AtListItem title='影院热映' arrow='right' extraText='查看更多' hasBorder={false}/>
              <ScrollView className="scroll-view" scrollX>
                {
                  // 外部传入组件内修改样式 statiic externalClasses = ['my-class']
                  arr.map((item, index) => <MovieItem obj={obj} key={item} my-class={['item',index === 4 ? 'last' : '']} />)
                }
              </ScrollView>
            </View>
          ))
        } */}
        { current === 0 && <Home /> }
        { current === 1 && <Hot /> }
        { current === 2 && <Mine /> }
        <AtTabBar
          tabList={[
            { title: '首页', iconType: 'home' },
            { title: '榜单', iconType: 'sketch' },
            { title: '我的', iconType: 'user' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          className="tab-bar"
          fixed
          color="#666"
          selectedColor="#42BD56"
        />

      </View>
    )
  }
}