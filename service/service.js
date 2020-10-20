let Service = class {
    constructor(code) {
        this.code = code
    }
    players = []
    remainingCards = []
    lowestValue = 0
    selectedCards = []

    get player() {
        return this.player
    }

    get remainingCards() {
        return this.remainingCards
    }

    get lowestValue() {
        return this.lowestValue
    }

    get selectedCard() {
        return this.selectedCards
    }

    //init 100 cards
    init(cardAmount) {
        console.log("---init---")
        var allCards = [];
        for (let i = 1; i <= cardAmount; i++) {
            allCards.push(i);
        }
        this.remainingCards = allCards
        console.log(this.remainingCards)
    }

    //shuffle card in remaining
    shuffle() {
        let remainingCards = this.remainingCards
        console.log("---shuffle---")
        console.log("before")
        console.log(remainingCards)
        let currentIndex = remainingCards.length, temporaryValue, randomIndex;

        console.log("loop")
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = remainingCards[currentIndex];
            remainingCards[currentIndex] = remainingCards[randomIndex];
            remainingCards[randomIndex] = temporaryValue;
            console.log(currentIndex)
        }

        this.remainingCards = remainingCards
        console.log("after")
        console.log(this.remainingCards)
    }

    //give card to each player
    setPlayerCard() {
        console.log("---setPlayerCard---")
        return this.players.map((player) => {
            const selectedCard = this.remainingCards.shift();
            this.selectedCards.push(selectedCard)
            this.setLowestValue()
            return {
                ...player,
                cards: [selectedCard],
            }
        })
    }

    //get min value of remaining deck
    setLowestValue() {
        console.log("---setLowestValue---")
        this.lowestValue = Math.min(...this.selectedCard);
        console.log(this.lowestValue)
    }

    //check if drop card is lowest
    checkIfGameOver(dropValue) {
        console.log("---drop---")
        console.log("before")
        console.log(this.selectedCards)
        let remainingSelected = this.selectedCards.filter(e => e != dropValue)
        this.selectedCards = remainingSelected
        console.log("after")
        console.log(this.selectedCards)
        if (dropValue != this.lowestValue) {
            console.log("gameOver!")
            return false
        }
        return true;
    }

    addPlayer(player){
        console.log("---addPlayer---")
        console.log(this.players)
        this.players.push(player)
    }
}

module.exports = Service
