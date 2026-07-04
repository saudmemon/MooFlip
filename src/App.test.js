import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MoodCompile app header', async () => {
  render(<App />);

  const titleMood = screen.getByText(/Mood/i);
  const titleCompile = screen.getByText(/Compile/i);
  expect(titleMood).toBeInTheDocument();
  expect(titleCompile).toBeInTheDocument();

  const likedButton = await screen.findByRole('button', { name: /liked quotes/i });
  expect(likedButton).toBeInTheDocument();
});
