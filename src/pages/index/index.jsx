import Taro, { Component } from "@tarojs/taro"
import { View, ScrollView } from "@tarojs/components"
import { AtListItem } from 'taro-ui'
// import { connect } from '@tarojs/redux'
// import { add, minus, asyncAdd } from '../../store/actions/todos'

import { hotMovie } from "../../apis"
import MovieItem from '../../components/movie_item/index'

import "./index.scss"

export default class Index extends Component {
  state = {
    obj: {
      img: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578705064.jpg',
      title: "理查德·朱维尔的哀歌",
      average: 8.2
    }
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


  render() {
    return (
      <View class="index-page">
        <AtListItem title='影院热映' arrow='right' extraText='查看更多' hasBorder={false}/>
        <ScrollView className="scroll-view" scrollX>
          {
            // 外部传入组件内修改样式 statiic externalClasses = ['my-class']
            Array.from({length: 5}).map(() => <MovieItem obj={this.state.obj} key={new Date()} my-class="item"/>)
          }
        </ScrollView>
      </View>
    )
  }
}