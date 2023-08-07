import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/Navigation';

const App: React.FC = () => {
  return (
    <NavigationContainer >
      {/* <Context> */}
        <AppNavigator />
      {/* </Context> */}
    </NavigationContainer>
  );
};

export default App;
