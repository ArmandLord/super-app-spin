import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BalanceScreen from '../src/screens/BalanceScreen';
import { useAppContext } from '../src/context/AppContext';
import useFetch from '../src/hooks/useFetch';

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  }));
  
  jest.mock('../src/context/AppContext', () => ({
    useAppContext: () => ({
      points: 1000,
      decreasePoints: jest.fn(),
    }),
  }));
  jest.mock('../src/hooks/useFetch', () => ({
    __esModule: true,
    default: () => ({
      addData: jest.fn(),
    }),
  }));
  
  describe('BalanceScreen component', () => {
    it('renders correctly and handles input', () => {
      const { getByTestId, getByPlaceholderText, getByText } = render(
        <BalanceScreen brand="exampleBrand" route={{ params: { brand: 'exampleBrand' } }} />
      );
      
      const pointsText = getByTestId('points-text');
      const continueButton = getByText('Continuar');
      const input = getByPlaceholderText('Monto en pesos');
      
      expect(pointsText).toBeTruthy();
      
      expect(continueButton).toBeTruthy();
      
      fireEvent.changeText(input, '500');
      
      expect(input.props.value).toBe('500');
    });
  });
