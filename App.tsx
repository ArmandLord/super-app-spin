import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigation/Navigation';
import ThemeProvider from './femsaComponents/theme/ThemeProvider';
import { MovementsProvider } from './src/context/SuperAppContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MovementsProvider>
        <NavigationContainer >
          <AppNavigator />
        </NavigationContainer>
      </MovementsProvider>
    </ThemeProvider >

  );
};

export default App;
