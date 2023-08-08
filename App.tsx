import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/Navigation';
import ThemeProvider from './femsaComponents/theme/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationContainer >
        {/* <Context> */}
        <AppNavigator />
        {/* </Context> */}
      </NavigationContainer>
    </ThemeProvider>

  );
};

export default App;
