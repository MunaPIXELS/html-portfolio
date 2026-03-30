import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders hero tagline', () => {
  render(<App />);
  const taglineElement = screen.getByText(/Available for internships/i);
  expect(taglineElement).toBeInTheDocument();
});
