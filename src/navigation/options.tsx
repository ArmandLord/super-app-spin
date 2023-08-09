import { Image } from "react-native"
export default {
    headerTitleAlign: 'left',
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {
      paddingLeft: 26,
    },
    headerStyle: {
      height: 116
    },
    headerShadowVisible: false,
    headerBackImage: () => <Image source={require('../assets/Angle_left.png')} />
}