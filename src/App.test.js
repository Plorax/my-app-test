import { render, screen } from '@testing-library/react';
import App from './App';

import { navigator } from './core/ui/UrlNavigation';

test("navigate button exists", () => {
  render(<App />);

  const inputButton = screen.getByText(/Navigate/i);
  expect(inputButton).toBeInTheDocument();
});

test("input box exists", () => {
  render(<App />);

  const navigateToInputBox = screen.getByTestId("navigateToUrl");
  expect(navigateToInputBox).toBeInTheDocument();
});

test("naivation button was clicked and event handled", ()=>{
  render(<App/>);

  const navigationButton = screen.getByText(/Navigate/i);

  const spyOnNavigationButtonClick = jest.spyOn(navigationButton, "click");

  navigationButton.click();

  expect(spyOnNavigationButtonClick).toHaveBeenCalled();

  spyOnNavigationButtonClick.mockReset();
  spyOnNavigationButtonClick.mockRestore();
});

test("navigation button navigates to url", ()=>{
  render(<App/>);

  const inputBox = screen.getByTestId('navigateToUrl');
  const spyOnNavigator = jest.spyOn(navigator, "navigateToPage");

  navigator.navigateToPage(inputBox.innerText);

  expect(spyOnNavigator).toHaveBeenCalled();

  spyOnNavigator.mockReset();
  spyOnNavigator.mockRestore();
});