import Taro, { Component } from "@tarojs/taro"
import { View, ScrollView } from "@tarojs/components"
// import { connect } from '@tarojs/redux'
// import { add, minus, asyncAdd } from '../../store/actions/todos'
import { hotMovie } from "../../apis"

import "./index.scss"

function MovieItem() {}

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  // componentDidMount() {
  //   this.getHotMoive()
  // }

  // async getHotMoive() {
  //   let res = await hotMovie()
  //   console.log(res)
  // }

  
  render() {
    return (
      <View className="index">
        <View class="page-section-spacing">
          <ScrollView class="scroll-view_H" scrollX style="width: 100%">
            <View class="scroll-view-item_H">1</View>
            <View class="scroll-view-item_H">2</View>
            <View class="scroll-view-item_H">3</View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
