import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login screen', () => {
  render(<App />);
  const loginButton = screen.getByText(/Entrar/i);
  expect(loginButton).toBeInTheDocument();
});
