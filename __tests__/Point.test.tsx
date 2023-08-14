import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PointsScreen from '../src/screens/PointsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type MockedNavigatorProps = {
  component: React.ComponentType<any>;
};

const MockedNavigator: React.FC<MockedNavigatorProps> = ({ component: Component }) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MockedScreen" component={Component} />
    </Stack.Navigator>
  </NavigationContainer>
);

describe('PointsScreen', () => {
  test('renders without crashing', () => {
    render(<PointsScreen />);
  });

  test('displays header text', () => {
    const { getByText } = render(<PointsScreen />);
    expect(getByText('Elige la marca aliada en la que quieres usar tus puntos')).toBeTruthy();
  });

  test('navigates to BalanceScreen on brand card press', () => {
    const { getByText, getAllByText } = render(<MockedNavigator component={PointsScreen} />);

    fireEvent.press(getAllByText('Volaris')[0]);
    fireEvent.press(getAllByText('Smart Fit')[0]);
    fireEvent.press(getAllByText('VIX')[0]);
  });
});
