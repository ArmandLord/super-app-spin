import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Movement } from '../models/Movement';

import SplashScreen from '../screens/splash/splashScreen';
import LoginScreen from '../screens/login/loginScreen';


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
    <Stack.Screen name="login" component={LoginScreen} 
          options={{ headerShown: false }} />
        
  </Stack.Navigator>
};

export default OnboardingNavigation;