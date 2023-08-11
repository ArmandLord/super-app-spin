import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { CustomNavBar } from '../index'
import { HomeScreen } from '../screens/Home/HomeScreen';
import LoyaltyScreen from '../screens/LoyaltyScreen/LoyaltyScreen';
import MovementsScreen from '../screens/Movements/MovementsScreen';
import useTheme from '../../femsaComponents/hooks/useTheme';
import { Movement } from '../models/Movement';
import ExchangePoints from '../screens/ExchangePoints/ExchangePointsScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert, BackHandler, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMovementsContext } from '../context/SuperAppContext';
import BalanceScreen from '../screens/Balance/BalanceScreen';
import DetailssScreen from '../screens/Movements/detailsmovements/MovementsDetailsScreens';

import SplashScreen from '../screens/splash/splashScreen';
import TicketScreen from '../screens/Ticket/TicketScreen';
import Login from '../screens/Login/Login';


export type RootStackParamList = {
  Home: undefined,
  Beneficios: undefined,
  Cartera: undefined,
  Cuenta: undefined,
  Movimientos: undefined,
  Detalles: { movement: Movement };

};



const Stack = createStackNavigator();


const OnboardingNavigation = () => {

  //Navegacion principal, aqui se maneja la navegacion para SplashScreen, Login, Registro, etc, Cuando se loguea se mana a llamar al MenuNavigation que contiene 
  // a las tabs.
  return <Stack.Navigator initialRouteName='splash' >
    <Stack.Screen name="splash" component={SplashScreen}
      options={{ headerShown: false }} />
    <Stack.Screen name="login" component={Login} />
  </Stack.Navigator>
};

export default OnboardingNavigation;