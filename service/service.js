const service = {
    remainingCards: [],
    lowestValue: 0,
    selectedCards: [],
    init: () => {
        console.log("init")
        var ans = [];
        for (let i = 1; i <= 100; i++) {
            ans.push(i);
        }
        service.remainingCards = ans
        console.log(service.remainingCards)
    },
    getMinValue: () => {

    },
    shuffle: () => {
        let remainingCards = service.remainingCards
        console.log("shuffle")
        console.log("before")
        console.log(remainingCards)
        let currentIndex = remainingCards.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // And swap it with the current element.
            temporaryValue = remainingCards[currentIndex];
            remainingCards[currentIndex] = remainingCards[randomIndex];
            remainingCards[randomIndex] = temporaryValue;
        }
        service.remainingCards = remainingCards
        console.log("after")
        console.log(service.remainingCards)
    },
    checkIfLowest(dropValue) {
        console.log("---drop---")
        console.log("before")
        console.log(service.selectedCards)
        let remainingSelected = service.selectedCards.filter(e => e != dropValue)
        service.selectedCards = remainingSelected
        console.log("after")
        console.log(service.selectedCards)
        if (dropValue != service.lowestValue) {
            console.log("gameOver!")
            return false
        }
        return true;
    },
    setPlayerCard(players) {
        return players.map((player) => {
            const selectedCard = this.remainingCards.shift();
            this.selectedCards.push(selectedCard)
            return{
                ...player,
                cards: [selectedCard],
            }
        })
    },
}

module.exports = { ...service }
