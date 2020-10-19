const random = (input) => {
  return Math.floor(Math.random() * input)
}

const service = (initCards = []) => {
  let remainingCards = initCards
  let cardsOnHands = []

  return {
    init: () => {
      var ans = []
      for (let i = 1; i <= 100; i++) {
        ans.push(i)
      }
      remainingCards = ans
    },
    getRemainingCards: () => {
      return remainingCards
    },
    getLowestValue: () => {
      return Math.min(...cardsOnHands)
    },
    shuffle: () => {
      const shuffledDeck = [...remainingCards]
      let currentIndex = shuffledDeck.length,
        tempValue,
        randomIndex

      while (0 !== currentIndex) {
        randomIndex = random(currentIndex)
        currentIndex -= 1

        tempValue = shuffledDeck[currentIndex]
        shuffledDeck[currentIndex] = shuffledDeck[randomIndex]
        shuffledDeck[randomIndex] = tempValue
      }
      remainingCards = shuffledDeck
    },
    checkIfLowest(dropValue) {
      let remainingSelected = cardsOnHands.filter(
        (value) => value !== dropValue
      )
      const lowest = this.getLowestValue()
      cardsOnHands = remainingSelected
      return dropValue === lowest
    },
    setPlayerCard(players) {
      return players.map((player) => {
        const selectedCard = remainingCards.shift()
        cardsOnHands.push(selectedCard)
        return {
          ...player,
          cards: [selectedCard],
        }
      })
    },
    dropCard(players, playerId, cardValue) {
      const player = players.find((player) => player.id === playerId)
      const hasCard = player.cards.includes(cardValue)
      if (!hasCard) return false

      return this.checkIfLowest(cardValue)
    },
    hasCardOnHands() {
      return cardsOnHands.length !== 0
    },
  }
}

module.exports = service
