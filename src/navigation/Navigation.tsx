import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import {HomeScreen} from '../Screens/Home/HomeScreen';
import BalanceScreen from '../Screens/BalanceScreen';
import LoyaltyScreen from '../Screens/LoyaltyScreen';
import MovementsScreen from '../Screens/MovementsScreen';
import MovementsTicketScreen from '../Screens/MovementsTicketScreen';
import PointsTicketScreen from '../Screens/PointsTicketScreen';
import SelectAliadeScreen from '../Screens/SelectAliadeScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export type RootStackParamList = {
    Home: undefined,
    Beneficios:undefined,
    Cartera:undefined,
    Cuenta:undefined};

type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>;

const HomeStack = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<HomeScreenRouteProps>();

  useEffect(() => {
    if (route.params?.init)
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
  }, [route.params?.init]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Beneficios" component={HomeScreen} />
      <Stack.Screen name="Cartera" component={LoyaltyScreen} />
      <Stack.Screen name="Cuenta" component={LoyaltyScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        name="Beneficios"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Cartera"
        component={LoyaltyScreen}
        
      />
      <Tab.Screen
        name="Cuenta"
        component={LoyaltyScreen}
        
      />
    </Tab.Navigator>
  );
};

export default Navigation;