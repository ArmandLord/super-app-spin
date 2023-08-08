import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';


import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import BenefitScreen from '../screens/BenefitScreen';
import WalletScreen from '../screens/WalletScreen';

const Tab = createBottomTabNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icon_home.png')}
                style={{width: size, height: size, tintColor: '#69698B'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Beneficios"
          component={BenefitScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icon_benefit.png')}
                style={{width: size, height: size, tintColor: '#05053D'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cartera"
          component={WalletScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icon_wallet.png')}
                style={{width: size, height: size, tintColor: '#05053D'}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cuenta"
          component={AccountScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/icon_account.png')}
                style={{width: size, height: size, tintColor: '#69698B'}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
