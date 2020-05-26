import { View, Image, Text } from "@tarojs/components"
import { AtRate } from 'taro-ui'
import './index.scss'

export default function MovieItem(props) {
  let { img, title, average } = props.obj

  return (
    <View className="scroll-item">
      <View>
        <Image src={img} className="img" />
      </View>
      <View className="title">{title}</View>
      <View className="rating">
        <AtRate size='12' value={average / 2} />
        <Text>{average}</Text>
      </View>
    </View>
  )
}
MovieItem.defaultProps = {
  obj: {
    img: '',
    title: "",
    average: 10
  }
}