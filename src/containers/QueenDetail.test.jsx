import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QueenDetail from './QueenDetail';
import { BrowserRouter as Router } from 'react-router-dom';

describe('QueenDetail component', () => {
  afterEach(() => cleanup());
  it('renders QueenDetail', () => {
    const { asFragment } = render(
      <Router>
        <QueenDetail />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
