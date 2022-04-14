const { countComments } = require('./count.js');

const commentArray = [
  {
    username: 'User 1',
    comment: 'Comment',
  },
  {
    username: 'User 2',
    comment: 'Comment 2',
  },
  {
    username: 'User 3',
    comment: 'Comment 3',
  },
  {
    username: 'User 4',
    comment: 'Comment 4',
  },
  {
    username: 'User 5',
    comment: 'Comment 5',
  },
];

describe('Checking number of comments', () => {
  test('Checking our function passes for counting comments', () => {
    expect(countComments(commentArray)).toBe(5);
  });
});