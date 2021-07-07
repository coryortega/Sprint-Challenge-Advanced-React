import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from "./App";

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  rtl.render(<App />)
});

test('displays the title', () => {
  const{ getByText } = rtl.render(<App />);
  getByText("Players")
});

const players = document.h3

test('each players name is displayed', () => {
  setTimeout(() => {const{ getByLabelText } = rtl.render(<App />);
  getByLabelText(players)}, 8000)
});