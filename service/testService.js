const { remainingCards } = require('../service/service');
const Service = require('../service/service')

const test = {
    testService: () => {
        let service = new Service("abcde");
        let players = [
            { id: 'u1', cards: [] },
            { id: 'u2', cards: [] },
          ]
        for(let i=0;i<=players.length;i++){
            console.log(players[i])
            service.addPlayer(players[i])
        }
        service.init()
        service.shuffle()
        service.setPlayerCard()
        service.setLowestValue()
        service.checkIfGameOver()
    }
}

module.exports = test;