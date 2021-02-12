import { render } from '@testing-library/react';
import React from 'react';

import Home from './index';

describe('Home page', () => {
  let container;

  beforeEach(() => {
    ({ container } = render(<Home />));
  });

  it('has hello text', () => {
    expect(container).toHaveTextContent('Hello world');
  });
});
