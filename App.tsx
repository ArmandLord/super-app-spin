import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import ThemeProvider from './femsaComponents/theme/ThemeProvider';
import { MovementsProvider, useMovementsContext } from './src/context/SuperAppContext';
import GeneralNavigation from './src/navigation/GeneralNavigation';

const App: React.FC = () => {
  const { state } = useMovementsContext()
  useEffect(() => {
    console.log('changed')
  }, [state.isLoged])
  return (
    <ThemeProvider>
      <MovementsProvider>
        <NavigationContainer >
          <GeneralNavigation />
        </NavigationContainer>
      </MovementsProvider>
    </ThemeProvider >

  );
};

export default App;
