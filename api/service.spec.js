const service = require('../service/service')

test('setPlayerCard should give 1 card to every', () => {
  const underTest = service([1, 2, 3, 4, 5])
  const players = [
    { id: 'u1', cards: [] },
    { id: 'u2', cards: [] },
  ]

  const result = underTest.setPlayerCard(players)

  expect(result).toStrictEqual([
    { id: 'u1', cards: [1] },
    { id: 'u2', cards: [2] },
  ])
  expect(underTest.getRemainingCards()).toStrictEqual([3, 4, 5])
})

describe('Minder Game', () => {
  test('player A > B > C drop card Win!', () => {
    const underTest = service([1, 3, 5, 2, 5])
    const players = underTest.setPlayerCard([
      { id: 'A', cards: [] }, // 1
      { id: 'B', cards: [] }, // 3
      { id: 'C', cards: [] }, // 5
    ])

    const round1 = underTest.dropCard(players, 'A', 1)
    const round2 = underTest.dropCard(players, 'B', 3)
    const round3 = underTest.dropCard(players, 'C', 5)

    const success = true
    expect(round1).toBe(success)
    expect(round2).toBe(success)
    expect(round3).toBe(success)
  })

  test('All players drop all card and Win', () => {
    const underTest = service([1, 3, 5, 2, 5])
    const players = underTest.setPlayerCard([
      { id: 'A', cards: [] }, // 1
      { id: 'B', cards: [] }, // 3
      { id: 'C', cards: [] }, // 5
    ])
    underTest.dropCard(players, 'A', 1)
    underTest.dropCard(players, 'B', 3)
    underTest.dropCard(players, 'C', 5)

    const hasCardOnHands = underTest.hasCardOnHands()

    const noCard = false
    expect(hasCardOnHands).toBe(noCard)
  })

  test('player A drop Lost', () => {
    const underTest = service([3, 1, 5, 2, 5])
    const players = underTest.setPlayerCard([
      { id: 'A', cards: [] }, // 3
      { id: 'B', cards: [] }, // 1
      { id: 'C', cards: [] }, // 5
    ])

    const round1 = underTest.dropCard(players, 'A', 3)

    const lost = false
    expect(round1).toBe(lost)
  })
})
