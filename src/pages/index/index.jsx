import Taro, { Component } from "@tarojs/taro"
import { View, ScrollView} from "@tarojs/components"
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
    },
    a: 1
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
      <View>
        <ScrollView className="scroll-view" scrollX>
          <MovieItem obj={this.state.obj} />
          <View className="scroll-item">2</View>
          <View className="scroll-item">3</View>
        </ScrollView>
      </View>
    )
  }
}