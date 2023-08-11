import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import ThemeProvider from './src/theme/ThemeProvider';
import {Alert, Button} from './src';
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
