import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import ThemeProvider from './src/theme/ThemeProvider';
import {Button} from './src';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <ThemeProvider>
      {/* <Button text="Hola ironhackers" onPress={() => console.log('spin')} /> */}
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
