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
    shuffle: (allCards) => {
        console.log("shuffle")
    }
}

module.exports = service;