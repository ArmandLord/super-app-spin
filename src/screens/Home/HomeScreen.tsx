import React from 'react';
import { View,Image } from 'react-native';
import {Text} from '../../index';
import MobilePNG from '../../assets/mobile.png';
import { styles } from './home.style';

export const HomeScreen = () => {
  return (
      <View style={styles.container}>
      <Image source={MobilePNG} alt="icon-mobile" style={styles.image} />
      <Text variant='headline-large'>Pantalla home</Text>
    </View>
    
    )
}
