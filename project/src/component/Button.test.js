//For understanding - error occured while running.


import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Buttons from '../Buttons';  // Adjust the import based on your file structure

// Mock Alert.alert to avoid triggering real alerts during testing
jest.mock('react-native', () => {
  const original = jest.requireActual('react-native');
  return {
    ...original,
    Alert: {
      alert: jest.fn(),
    },
  };
});

describe('Buttons Component', () => {
  it('should render buttons correctly', () => {
    const { getByText } = render(<Buttons />);

    // Check if buttons are rendered
    expect(getByText('Click here')).toBeTruthy();
    expect(getByText('Back')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
  });

  it('should trigger alert when "Click here" button is pressed', () => {
    const { getByText } = render(<Buttons />);

    const clickButton = getByText('Click here');
    fireEvent.press(clickButton);

    // Assert that Alert.alert was called
    expect(Alert.alert).toHaveBeenCalledWith('Button is pressed');
  });

  it('should trigger alert when "Back" button is pressed', () => {
    const { getByText } = render(<Buttons />);

    const backButton = getByText('Back');
    fireEvent.press(backButton);

    // Assert that Alert.alert was called
    expect(Alert.alert).toHaveBeenCalledWith('Button is pressed');
  });

  it('should trigger alert when "Next" button is pressed', () => {
    const { getByText } = render(<Buttons />);

    const nextButton = getByText('Next');
    fireEvent.press(nextButton);

    // Assert that Alert.alert was called
    expect(Alert.alert).toHaveBeenCalledWith('Button is pressed');
  });
});
