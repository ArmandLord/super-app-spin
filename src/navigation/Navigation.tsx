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




export type RootStackParamList = {
  Home: undefined,
  Beneficios: undefined,
  Cartera: undefined,
  Cuenta: undefined
};

type HomeScreenRouteProps = RouteProp<RootStackParamList, 'Home'>;

const HomeStack = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<HomeScreenRouteProps>();

  // useEffect(() => {
  //   if (route.params?.init)
  //     navigation.reset({
  //       index: 0,
  //       routes: [{name: 'Home'}],
  //     });
  // }, [route.params?.init]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Beneficios" component={LoyaltyScreen} />
      <Stack.Screen name="Cartera" component={HomeScreen} />
      <Stack.Screen name="movments" component={MovementsScreen} />
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
        component={HomeScreen}

      />
      <Tab.Screen
        name="Cuenta"
        component={MovementsScreen}

      />
    </Tab.Navigator>
  );
};

export default Navigation;