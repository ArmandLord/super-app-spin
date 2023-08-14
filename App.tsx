import 'react-native-gesture-handler';
import React from 'react';
import ThemeProvider from './src/theme/ThemeProvider';
import {Alert} from './src';
import AppNavigator from './src/navigation/AppNavigator';
import {AppProvider} from './src/context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider>
        <AppNavigator />
        <Alert.Component />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
