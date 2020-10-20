const Service = require('../service/service')

test('setPlayerCard should give 1 card to every', () => {
  let service = new Service("abcde");
  service.init(5);
  const players = [
    { id: 'u1', cards: [] },
    { id: 'u2', cards: [] },
  ]
  for(let i=0;i<players.length;i++){
    service.addPlayer(players[i]);
  }
  let result = service.setPlayerCard();

  expect(result).toStrictEqual([
    { id: 'u1', cards: [1] },
    { id: 'u2', cards: [2] },
  ])
  expect(service.remainingCards).toStrictEqual([3, 4, 5])
})
