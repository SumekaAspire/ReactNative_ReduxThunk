/*Types of testing
1. UNIT TESTING -  Individual components / functions
2. INTEGRATION TESTING - interactions  b/t different components
3. UI TESTING - end to end testing, user make interactions with the application

//Frameworks - jest, mocha, enzyme(airbnb), reacttesting library,cypress, detox,ava
1. Jest - it is pre-configured and has robust features for unit testing, mocking, and snapshot testing.
2. React testing Library -  focuses on testing user interactions and behavior.
3. Enzyme, Detox - UI /COMPONENT TESTING
4. Cypress -  Good for end-to-end testing when combined with Expo.
*/

//Testing Framework : Jest - fast and efficient, snapshot testing,Mocking and spying, Built-in code coverage

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SocialLinks from './SocialLinks';
import { Linking } from 'react-native';// import Linking


test('should render the label of the social link', () => {
  const {getByText} = render(
    <SocialLinks
      type="twitter"
      label="John Doe's Twitter"
      link="<https://twitter.com/>"
    />,
  );

  const label = getByText("John Doe's Twitter");
  expect(label).toBeTruthy();
});

test('should social media icon render', () => {
  const { getByRole } = render(
    <SocialLinks
      type="twitter"
      label="John Doe's Twitter"
      link="<https://twitter.com/>"
    />,
  );

  const icon = getByRole("image");
  expect(icon).toBeTruthy();
});

test('should social media icon render using test-id', () => {
    const { getByTestId } = render(
      <SocialLinks
        type="twitter"
        label="John Doe's Twitter"
        link="<https://twitter.com/>"
      />,
    );
  
    const icon = getByTestId("test-icon");
    expect(icon).toBeTruthy();
  });

  //Testing user interactions

test('should open twitter when user pressed the twitter link',()=>{
    const{ getByText } = render(
        <SocialLinks
        type="twitter"
        label="John Doe's Twitter"
        link="https://twitter.com/"
        />
    );

    const label = getByText("John Doe's Twitter");
    fireEvent.press(label);
    expect(Linking.openURL).toHaveBeenCalledWith('https://twitter.com/');
})
