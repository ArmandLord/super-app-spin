import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import useTheme from '../../femsaComponents/hooks/useTheme';
import { HomeScreen } from '../screens/Home/HomeScreen';
import LoyaltyScreen from '../screens/LoyaltyScreen/LoyaltyScreen';


export type RootStackParamList = {
  Home: { init: boolean };
};

type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>;

const HomeStack = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<HomeScreenRouteProps>();

  useEffect(() => {
    if (route.params?.init)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
  }, [route.params?.init]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Beneficios" component={LoyaltyScreen} />
      <Stack.Screen name="Cartera" component={HomeScreen} />
      <Stack.Screen name="Cuenta" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const { colors } = useTheme()

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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
        component={HomeScreen}

      />
      <Tab.Screen
        name="Cuenta"
        component={HomeScreen}

      />
    </Tab.Navigator>
  );
};

export default Navigation;