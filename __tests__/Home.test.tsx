import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../src';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    );
  });

  it('renders card titles with correct size', () => {
    const { getByText } = render(<HomeScreen />);
  
    expect(getByText('Consulta tu historial')).toHaveStyle({ fontSize: 'small' });
    expect(getByText('Cambia tus puntos')).toHaveStyle({ fontSize: 'small' });
  });

  it('renders card icons correctly', () => {
    const { getByTestId } = render(<HomeScreen />);
  
    const historyCardIcon = getByTestId('history-card-icon');
    expect(historyCardIcon).toBeTruthy();
  
    const medalCardIcon = getByTestId('medal-card-icon');
    expect(medalCardIcon).toBeTruthy();
  });
  it('renders card titles with correct size', () => {
    const {getByText} = render(<HomeScreen />);

    expect(getByText('Consulta tu historial')).toHaveStyle({fontSize: 'small'});
    expect(getByText('Cambia tus puntos')).toHaveStyle({fontSize: 'small'});
  });

  it('renders dynamic text content correctly', () => {
    const { getByText } = render(<HomeScreen />);
  
    expect(getByText('Tienes')).toBeTruthy();
    expect(getByText('10,657 puntos')).toBeTruthy();
    expect(getByText('Valen $156.00')).toBeTruthy();
  });
  
    
});
