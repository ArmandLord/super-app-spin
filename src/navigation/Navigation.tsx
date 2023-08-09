import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { CustomNavBar } from '../index'
import { HomeScreen } from '../screens/Home/HomeScreen';
import LoyaltyScreen from '../screens/LoyaltyScreen/LoyaltyScreen';
import MovementsScreen from '../screens/Movements/MovementsScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import useTheme from '../../femsaComponents/hooks/useTheme';
import { Movement } from '../models/Movement';
import ExchangePoints from '../screens/ExchangePoints/ExchangePoints';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMovementsContext } from '../context/SuperAppContext';






export type RootStackParamList = {
  Home: undefined,
  Beneficios: undefined,
  Cartera: undefined,
  Cuenta: undefined,
  Movimientos: undefined,
  Detalles: { movement: Movement };

};

interface BackButton {
  onPress: () => void
}


const BackButton: React.FC<BackButton> = ({ onPress }) => {
  return <TouchableOpacity
    style={{ marginLeft: 24 }}
    onPress={() => {
      onPress()
    }}
  >
    <Image source={require('../assets/Navigation/BackButton.png')} />
  </TouchableOpacity>
}

const Navigation = () => {
  const { colors } = useTheme()
  const { state, dispatch } = useMovementsContext()
  const navigation = useNavigation();

  const StackNavigation = () => {


    return (
      <Stack.Navigator >
        <Stack.Screen name="Beneficios" component={LoyaltyScreen} />
        <Stack.Screen name="Movimientos" component={MovementsScreen}
          options={{
            headerLeft: (props) => (
              <BackButton onPress={() => {
                navigation.navigate('Beneficios');
                dispatch({ type: 'SHOW_TAB', payload: true })
              }} />
            ),
            headerTitleAlign: 'left'
          }} />
        <Stack.Screen name="Exchange" component={ExchangePoints}
          options={{
            headerLeft: (props) => (
              <BackButton onPress={() => {
                navigation.navigate('Beneficios');
                dispatch({ type: 'SHOW_TAB', payload: true })
              }} />
            ),
          }} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator tabBar={(props) => (state.tabBar ? <CustomNavBar {...props} focusedColor={colors.content_primary} blurColor={colors.content_tertiary} /> : null)}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Benefits"
        options={{
          headerShown: false
        }}
        component={StackNavigation}
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