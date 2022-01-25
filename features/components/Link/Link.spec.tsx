import { render } from '@testing-library/react';

import Link from './Link';

describe('Link', () => {
  it('renders without crashing', () => {
    const { container } = render(<Link href="https://www.frontendlive.com" />);
    expect(container).toBeTruthy();
  });
});
