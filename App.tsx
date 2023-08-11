import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import ThemeProvider from './src/theme/ThemeProvider';
import {Alert, Button} from './src';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
      <Alert.Component />
    </ThemeProvider>
  );
};

export default App;
