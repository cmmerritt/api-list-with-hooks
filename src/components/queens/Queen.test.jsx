import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Queen from './Queen';

describe('Queen component', () => {
  afterEach(() => cleanup());
  it('renders Queen', () => {
    const { asFragment } = render(
      <Queen 
        name="RuPaul"
        image="rupaul.jpg"
        quote="Shante, you stay."
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
