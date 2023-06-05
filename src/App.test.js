import { render, screen } from '@testing-library/react';
import App from './App';

test('renders something', () => {
  render(<App />);
  const element = screen.getByText("Home");
  expect(element).toBeInTheDocument();
});
