import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import DragQueens from './DragQueens';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://www.nokeynoshade.party/api/queens?limit=10', (req, res, ctx) => {
      return res(
        ctx.json(
          [...Array(10)].map((_, i) => ({
            name: 'RuPaul',
            image: 'rupaul.jpg',
            quote: `Shante, you stay ${i}.`
          }))
        )
      );
    }
  )
);

describe('DragQueens container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it.only('displays a list of queens', async () => {
    render(
      <MemoryRouter>
        <DragQueens />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    console.log(ul);
    expect(ul.children.length).toEqual(10);
  });
});
