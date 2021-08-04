import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QueenList from './QueenList';
import { MemoryRouter } from 'react-router-dom';

const TestQueenList = [
  {
    name: 'RuPaul',
    image: 'rupaul.jpg',
    quote: 'Shante, you stay.'
  },
  {
    name: 'Darcy',
    image: 'darcy.jpg',
    quote: 'Sashay away.'
  }
];

describe('QueenList component', () => {
  afterEach(() => cleanup());
  it('renders QueenList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <QueenList
          queens={TestQueenList} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
