import { render, screen } from '@testing-library/react';
import GovorkovJSApp from './App';
import App from './App';

test('renders learn react link', () => {
  render(<GovorkovJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


