const { countItems } = require('./count.js');

const itemsArray = [
  {
    movie: 'Movie1',
    id: 1,
  },
  {
    movie: 'Movie2',
    id: 2,
  },
  {
    movie: 'Movie3',
    id: 3,
  },
  {
    movie: 'Movie4',
    id: 4,
  },
];

describe('Checking number of items', () => {
  test('Checking our function passes for counting items', () => {
    expect(countItems(itemsArray)).toBe(4);
  });
});
