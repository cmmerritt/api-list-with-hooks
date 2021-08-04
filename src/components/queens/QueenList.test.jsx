import React from 'react';
import { render, cleanup } from '@testing-library/react';
import QueenList from './QueenList';

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

//add <MemoryRouter> when you add router

describe('QueenList component', () => {
  afterEach(() => cleanup());
  it('renders QueenList', () => {
    const { asFragment } = render(
      <QueenList
        queens={TestQueenList}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
