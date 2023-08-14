import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';
import ThemeProvider from '../src/theme/ThemeProvider';

describe('HomeScreen', () => {
  test('renders the home screen correctly', () => {
    render(
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>,
    );
  });
});
