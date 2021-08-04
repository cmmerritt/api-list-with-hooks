import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QueenDetail from './QueenDetail';

//add <MemoryRouter> when you add router

describe('QueenDetail component', () => {
  afterEach(() => cleanup());
  it('renders QueenDetail', () => {
    const { asFragment } = render(
      <QueenDetail 
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
