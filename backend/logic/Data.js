var players = ["Waiting", "Waiting", "Waiting", "Waiting", "Waiting"];
var index = 0;

function addPlayer(data) {
    if(index >= players.length) {
        return;
    }
    players[index] = data;
    index++;
}

function getPlayers() {
    return players;
}

module.exports = { addPlayer, getPlayers }