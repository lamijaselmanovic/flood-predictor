import React from 'react';
import { act, render } from '@testing-library/react';

import App from './App';

test('app renders without crashing', async () => {
  await act(async () => {
    render(<App />);
  });
});
