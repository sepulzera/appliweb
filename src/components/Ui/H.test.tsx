import React from 'react';
import { render } from '@testing-library/react';
import H from './H';

test('renders heading', () => {
  const { getByText } = render(<H variant='h1'>This is your new app!</H>);
  const titleElement = getByText(/This is your new app!/i);
  expect(titleElement).toBeInTheDocument();
});
