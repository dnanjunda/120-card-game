var players = ["Waiting", "Waiting", "Waiting", "Waiting", "Waiting"];
var socketIDs = [];
var index = 0;
var index2 = 0;

function addPlayer(data) {
    if(index >= players.length) {
        return;
    }
    players[index] = data;
    index++;
}

function addSocket(id) {
    if(index2 >= players.length) {
        return;
    }
    socketIDs[index2] = id;
    index2++;
}

function getPlayers() {
    return players;
}

function getSocketIDs() {
    return socketIDs;
}

function getRemainingPlayers(player) {
    var RemainingPlayers = [];

    var playerIndex = getIndex(player);

    for(let i = playerIndex+1; i < players.length; i++) {
        RemainingPlayers.push(players[i]);
    }

    for(let j = 0; j < playerIndex; j++) {
        RemainingPlayers.push(players[j]);
    }

    return RemainingPlayers;
}

function getIndex(player) {
    for(let i = 0; i < players.length; i++) {
        if(players[i] === player) {
            return i;
        }
    }
}

module.exports = { addPlayer, getPlayers, getSocketIDs, addSocket, getRemainingPlayers, getIndex }