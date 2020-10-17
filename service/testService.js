const { remainingCards } = require('../service/service');
const service = require('../service/service')

const test = {
    testService: () => {
        console.log("testService");
        let initCards = service.init()
        console.log(initCards)
        let shuffledCard = service.shuffle(initCards)
        service.getCard(7,shuffledCard)
    }
}

module.exports = test;