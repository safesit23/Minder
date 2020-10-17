const service = {
  remainingCards: [],
  lowestValue: 0,
  selectedCards: [], // การ์ดที่แจกไปแล้ว อยู่ในมือ
  init: () => {
    console.log('init')
    var ans = []
    for (let i = 1; i <= 100; i++) {
      ans.push(i)
    }
    return ans
  },
  // ['u1', 'u2']
  // selectCard: (players, remainingCards) => {
  //     let selectedCards = remainingCards.splice(0, players.length)
  //     // console.log(selectedCards.length)
  //     // console.log("---selected---")
  //     // console.log(selectedCards)
  //     let min = Math.min(...Array.from(selectedCards))
  //     // console.log(remainingCards)
  //     // console.log("lowest:"+min)
  //     service.lowestValue = min
  //     service.selectedCards = selectedCards

  //     return selectedCards
  // },
  shuffle: (remainingCards) => {
    console.log('shuffle')
    console.log(remainingCards)
    let currentIndex = remainingCards.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = remainingCards[currentIndex]
      remainingCards[currentIndex] = remainingCards[randomIndex]
      remainingCards[randomIndex] = temporaryValue
    }
    console.log(remainingCards)
    return remainingCards
  },
  checkIfLowest(dropValue) {
    console.log('---before---')
    let remainingSelected = service.selectedCards.filter((e) => e != dropValue)
    service.selectedCards = remainingSelected
    console.log('---after---')
    return dropValue == service.lowestValue
  },
  setPlayerCard(players, remainingCards) {
    return players.map((player) => ({
      ...player,
      cards: [remainingCards.shift()],
    }))
  },
}

module.exports = { ...service }
