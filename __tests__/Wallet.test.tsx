import React from 'react';
import { render } from '@testing-library/react-native';
import WalletScreen from '../src/screens/WalletScreen';

describe('WalletScreen', () => {
  it('displays the text "WalletScreen"', () => {
    const { getByText } = render(<WalletScreen />);
    const textElement = getByText('WalletScreen');
    expect(textElement).toBeTruthy();
  });
});
