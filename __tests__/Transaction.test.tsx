import React from 'react';
import { render } from '@testing-library/react-native';
import Transactions from '../src/screens/TransactionsScreen';
import useFetch from '../src/hooks/useFetch';

jest.mock('../src/hooks/useFetch');

describe('Transactions component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Transactions />);
        const filterBtns = getByTestId('filter-btns');
    const sectionList = getByTestId('section-list');

    expect(filterBtns).toBeTruthy();
    expect(sectionList).toBeTruthy();
  });
});