import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BenefitScreen from '../src/screens/BenefitScreen';

describe('BenefitScreen', () => {
  test('renders without crashing', () => {
    render(<BenefitScreen />);
  });

  test('displays section titles', () => {
    const { getByText } = render(<BenefitScreen />);
    expect(getByText('Beneficios')).toBeTruthy();
    expect(getByText('Acumula productos')).toBeTruthy();
  });

  test('displays points counter', () => {
    const { getByText } = render(<BenefitScreen />);
    expect(getByText('Tienes')).toBeTruthy();
    expect(getByText('10,657 puntos')).toBeTruthy();
  });

  test('navigates to PointsScreen on press', () => {
    const { getByText } = render(<BenefitScreen />);
    fireEvent.press(getByText('Consulta tu historial'));
  });

  test('displays images with correct dimensions', () => {
    const { getByTestId } = render(<BenefitScreen />);
    const historyTaskImage = getByTestId('history-task-image');
    const premiaStarImage = getByTestId('premia-star-image');
  });
});
