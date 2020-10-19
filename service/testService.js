const { remainingCards } = require('../service/service');
const service = require('../service/service')

const test = {
    testService: () => {
        service.init()
        service.shuffle()
        service.checkIfLowest(24)
    }
}

module.exports = test;