import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from './HomeScreen'; 

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<HomeScreen />);
    
    const textElement = getByText('Pantalla home');
    const imageElement = getByAltText('icon-mobile');
    
    expect(textElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
  });
});
