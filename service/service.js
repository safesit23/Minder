const service = {
    init: () => {
        console.log("init")
        var ans = [];
        for (let i = 1; i <= 100; i++) {
            ans.push(i);
        }
        console.log(ans)
        return ans;
    },
    random: () => {
        console.log("random")
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
    }
}

module.exports = {...service};