import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ListItem from './ListItem'; 

// Mock para el icono
jest.mock('react-native/Libraries/Image/Image', () => 'Image');

describe('ListItem Component', () => {
    const mockProps = {
        itemName: 'Item Name',
        supportText: 'Support Text',
        infoLabel: 'Info Label',
        onPress: jest.fn(),
        icon: 'mock-icon-source',
    };

    it('renders correctly', () => {
        const { getByText } = render(<ListItem {...mockProps} />);
        
        const itemNameElement = getByText('Item Name');
        const supportTextElement = getByText('Support Text');
        const infoLabelElement = getByText('Info Label');
        
        expect(itemNameElement).toBeTruthy();
        expect(supportTextElement).toBeTruthy();
        expect(infoLabelElement).toBeTruthy();
    });

    it('calls onPress function when pressed', () => {
        const { getByTestId } = render(<ListItem {...mockProps} />);
        const pressable = getByTestId('list-item-pressable');

        fireEvent.press(pressable);

        expect(mockProps.onPress).toHaveBeenCalledTimes(1);
    });
});
