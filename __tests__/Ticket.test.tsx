import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TicketScreen from '../src/screens/TicketScreen';

describe('TicketScreen', () => {
  it('renders correctly', () => {
    const mockTransaction = {
      id: 1,
      entity: 'Volaris',
      points: 500,
      giftCode: 'ABC123',
      date: '2023-08-13T10:00:00Z',
      expiryDate: '2023-08-20T23:59:59Z',
      transactionNo: 'T123456',
    };

    const route = {
      params: mockTransaction,
    };

    const { getByText } = render(<TicketScreen route={route} />);
    
    expect(getByText('Volaris')).toBeTruthy();
    expect(getByText('Puntos cambiados:')).toBeTruthy();
    expect(getByText('Valen:')).toBeTruthy();
    expect(getByText('Fecha:')).toBeTruthy();
    expect(getByText('Válido desde el:')).toBeTruthy();
  });

  it('copies the gift code to clipboard', () => {
    const mockTransaction = {
      id: 1,
      entity: 'Volaris',
      points: 500,
      giftCode: 'ABC123',
      date: '2023-08-13T10:00:00Z',
      expiryDate: '2023-08-20T23:59:59Z',
      transactionNo: 'T123456',
    };

    const route = {
      params: mockTransaction,
    };

    const { getByText } = render(<TicketScreen route={route} />);
    
    const copyButton = getByText('Certificado de regalo');
    fireEvent.press(copyButton);
  });
});
