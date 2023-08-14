import React from 'react';
import { render } from '@testing-library/react-native';
import TabsScreen from '../src/screens/TabsScreen';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('TabsScreen', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TabsScreen />);
    const tabsNavigator = getByTestId('tabs-navigator');
    expect(tabsNavigator).toBeTruthy();
  });
});
