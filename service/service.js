const service = {
    remainingCards:[],
    lowestValue:0,
    selectedCards:[],
    init: () => {
        console.log("init")
        var ans = [];
        for (let i = 1; i <= 100; i++) {
            ans.push(i);
        }
        return ans;
    },
    getCard: (playerNumber,remainingCards) => {
        let selectedCards = remainingCards.splice(0,playerNumber)
        console.log(selectedCards.length)
        let playerCards = {}
        let player= {}
        for(i=0;i<selectedCards.length;i++){
            player["a"] = "b"
            console.log(player)
            //playerCards.push(player)
        }
        console.log("---selected---")
        console.log(selectedCards)
        let min = Math.min(...Array.from(selectedCards))
        console.log(remainingCards)
        console.log("lowest:"+min)
        console.log("player:")
        console.log(playerCards)
        return selectedCards
    },
    shuffle: (remainingCards) => {
        console.log("shuffle")
        console.log(remainingCards)
        let currentIndex = remainingCards.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = remainingCards[currentIndex];
            remainingCards[currentIndex] = remainingCards[randomIndex];
            remainingCards[randomIndex] = temporaryValue;
        }
        console.log(remainingCards)
        return remainingCards;
    },
}

module.exports = {...service};