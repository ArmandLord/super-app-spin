import { Image } from "react-native"
export default {
    headerTitleAlign: 'left',
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {
      paddingLeft: 16,
    },
    headerStyle: {
      height: 116
    },
    headerShadowVisible: false,
    headerTitleStyle: {
      fontFamily: 'Poppins'
    },
    headerBackImage: () => <Image source={require('../assets/Angle_left.png')} />
}