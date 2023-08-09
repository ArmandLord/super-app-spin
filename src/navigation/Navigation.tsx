import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CustomNavBar } from '../index'
import { HomeScreen } from '../screens/Home/HomeScreen';
import LoyaltyScreen from '../screens/LoyaltyScreen/LoyaltyScreen';
import MovementsScreen from '../screens/Movements/MovementsScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import useTheme from '../../femsaComponents/hooks/useTheme';
import { Movement } from '../models/Movement';





export type RootStackParamList = {
    Home: undefined,
    Beneficios:undefined,
    Cartera:undefined,
    Cuenta:undefined,
    Movimientos:undefined,
  Detalles: {movement:Movement};

  };

type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>;

const HomeStack = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<HomeScreenRouteProps>();

  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Beneficios" component={HomeScreen} />
      <Stack.Screen name="Cartera" component={LoyaltyScreen} />
      <Stack.Screen name="Cuenta" component={MovementsScreen} />
      <Stack.Screen name="Movimientos" component={MovementsScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const { colors } = useTheme()

  return (
    <Tab.Navigator tabBar={(props) =>
      <CustomNavBar {...props} focusedColor={colors.content_primary} blurColor={colors.content_tertiary} />}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        name="Beneficios"
        component={LoyaltyScreen}
      />
      <Tab.Screen
        name="Cartera"
        component={HomeStack}

      />
      <Tab.Screen
        name="Cuenta"
        component={MovementsScreen}

      />
    </Tab.Navigator>
  );
};

export default Navigation;