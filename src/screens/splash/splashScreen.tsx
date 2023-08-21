import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';


export default class SplashScreen extends Component {

  

  goToScreen(routeName) {
    this.props.navigation.navigate(routeName)
  }

  componentDidMount() {
    setTimeout(() => {
      this.goToScreen('login')
    }, 3000, this)
  }
  render() {

    return (
      <View style={styles.safeContainer}>
        <Image source={require('../../assets/splash/Splash2x.jpg')} style={styles.backgroundImage} />
        <View style={styles.centerContainer}>
          <Image source={require('../../assets/splash/SpinPlusLogo3x.png')} style={styles.logoImage} />
        </View>
      </View>
    );
  };
}


const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '60%',
    height: '80%',
    marginBottom: 10,
    resizeMode: 'contain'
  },
});