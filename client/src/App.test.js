import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from "./App";

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  render(<App />)
});

test('displays the title', () => {
  const{ getByText } = render(<App />);
  getByText(/Players/i)
});

const players = document.h3

test('each players name is displayed', () => {
  const{ getByLabelText } = render(<App />);
  getByLabelText(players)
});