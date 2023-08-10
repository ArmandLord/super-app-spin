import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import TabNavigator, { TabScreensProps } from './TabNavigator';
import MovementsDetailScreen from '../screens/MovementsDetail';
import Header from '../components/Header/Header';
import SCREENS from './constants';
import { Movements } from '../screens/Movements';

export type StackNavigatorScreenProps = {
  [SCREENS.TAB_NAVIGATOR]: NavigatorScreenParams<TabScreensProps>;
  [SCREENS.MOVEMENTS]: undefined;
  [SCREENS.BALANCE]: undefined;
  [SCREENS.POINTS_TICKET]: undefined;
  [SCREENS.MOVEMENT_TICKET]: Omit<HistoryItem, 'id' | 'operation'>;
  [SCREENS.SELECT_ALLY]: undefined;
};

const Stack = createStackNavigator<StackNavigatorScreenProps>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        component={TabNavigator}
        name={SCREENS.TAB_NAVIGATOR}
      />
      <Stack.Screen
        options={{
          header: () => <Header showGoBackButton title="Movimientos" />,
        }}
        component={Movements}
        name={SCREENS.MOVEMENTS}
      />
      <Stack.Screen
        options={{
          header: () => <Header showGoBackButton title="Cambia tus puntos" />,
        }}
        component={NoopComponent}
        name={SCREENS.BALANCE}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={NoopComponent}
        name={SCREENS.POINTS_TICKET}
      />
      <Stack.Screen
        options={{
          header: () => (
            <Header showGoBackButton title="Detalle del movimiento" />
          ),
        }}
        component={MovementsDetailScreen}
        name={SCREENS.MOVEMENT_TICKET}
      />
      <Stack.Screen
        options={{
          header: () => <Header showGoBackButton title="Cambia tus puntos" />,
        }}
        component={NoopComponent}
        name={SCREENS.SELECT_ALLY}
      />
    </Stack.Navigator>
  );
};

const NoopComponent = () => <Text>Screen in process</Text>;

export default MainStackNavigator;