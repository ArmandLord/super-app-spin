import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import BenefitScreen from '../screens/BenefitScreen';
import WalletScreen from '../screens/WalletScreen';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icon_home_press.png')
                  : require('../assets/icon_home.png')
              }
              style={{ width: size, height: size, tintColor: focused ? '#05053D' : '#69698B' }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, { color: focused ? '#05053D' : '#69698B', fontWeight: focused ? 'bold' : 'normal' }]}>
              Home
            </Text>
          ),
        })}
      />
      <Tab.Screen
        name="Beneficios"
        component={BenefitScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icon_benefit_press.png')
                  : require('../assets/icon_benefit.png')
              }
              style={{ width: size, height: size, tintColor: focused ? '#05053D' : '#69698B' }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, { color: focused ? '#05053D' : '#69698B', fontWeight: focused ? 'bold' : 'normal' }]}>
              Beneficios
            </Text>
          ),
        })}
      />
      <Tab.Screen
        name="Cartera"
        component={WalletScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icon_wallet.png')
                  : require('../assets/icon_wallet.png')
              }
              style={{ width: size, height: size, tintColor: focused ? '#05053D' : '#69698B' }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, { color: focused ? '#05053D' : '#69698B', fontWeight: focused ? 'bold' : 'normal' }]}>
              Cartera
            </Text>
          ),
        })}
      />
      <Tab.Screen
        name="Cuenta"
        component={AccountScreen}
        options={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icon_account_press.png')
                  : require('../assets/icon_account.png')
              }
              style={{ width: size, height: size, tintColor: focused ? '#05053D' : '#69698B' }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, { color: focused ? '#05053D' : '#69698B', fontWeight: focused ? 'bold' : 'normal' }]}>
              Cuenta
            </Text>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    fontFamily: 'Poppins',
  },
});

export default TabsNavigator;
