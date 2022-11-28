import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './nav-bar';

test('renders learn react link', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
