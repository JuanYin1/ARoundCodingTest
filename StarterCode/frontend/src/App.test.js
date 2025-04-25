import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const headerElement = screen.getByText(/Product List/i);
  expect(linkElement).toBeInTheDocument();
});
