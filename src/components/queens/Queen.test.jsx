import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Queen from './Queen';
import { MemoryRouter } from 'react-router-dom';

describe('Queen component', () => {
  afterEach(() => cleanup());
  it('renders Queen', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Queen 
          name="RuPaul"
          image="rupaul.jpg"
          quote="Shante, you stay."
          id="1"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
