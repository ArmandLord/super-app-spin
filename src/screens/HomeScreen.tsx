import { View, Image, StyleSheet } from 'react-native';
import Text from '../components/Text/Text';
import React from 'react';
import homeIcon from '../assets/mobile.png';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={homeIcon} style={styles.icon} />
      <Text style={styles.text}>Pantalla home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
