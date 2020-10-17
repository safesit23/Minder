const service = require('../service/service')

test('setPlayerCard should give 1 card to every', () => {
  const remainingCards = [1, 2, 3, 4, 5]
  const players = [
    { id: 'u1', cards: [] },
    { id: 'u2', cards: [] },
  ]

  const result = service.setPlayerCard(players, remainingCards)

  expect(result).toStrictEqual([
    { id: 'u1', cards: [1] },
    { id: 'u2', cards: [2] },
  ])
  expect(remainingCards).toStrictEqual([3, 4, 5])
})
