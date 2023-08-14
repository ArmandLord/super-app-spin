import React from 'react';
import { render } from '@testing-library/react-native';
import TransactionsDetailsScreen from '../src/screens/TransactionsDetailsScreen';
import useFetch from '../src/hooks/useFetch';

jest.mock('../src/hooks/useFetch', () => ({
  __esModule: true,
  default: () => ({ data: [], fetchData: jest.fn() }),
}));

describe('TransactionsDetailsScreen', () => {
  it('renders without crashing', () => {
    render(<TransactionsDetailsScreen route={{ params: { transactionId: 1 } }} />);
  });
});
