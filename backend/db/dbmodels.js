var mongodb = require("mongodb");
var config = require("../config/config");

const client = new mongodb.MongoClient(config.db_uri, {useNewUrlParser: true, useUnifiedTopology: true});

function getData() {
	const promiseQuery = new Promise(function(resolve, reject) {
		client.connect(err => {
			const codesCollection = client.db("120_game_db").collection("Codes");
			codesCollection.find({}).toArray(function (err, docs) {
				if (err) reject(new Error("error..."));
					resolve(docs);
			});
		});
	});
	return promiseQuery;
}

async function findCode(sentData) {
	return new Promise(function(resolve,reject) {
	client.connect(err =>{
		if(err) throw err;
		
		client.db("120_game_db").collection("Codes").findOne({code: sentData.code}, function(err, docs) {
			if(err) reject (new Error("couldn't get code"));
			//console.log("code found");
			resolve(docs);
			//client.close();
		});
	});
})
}

function sendData(sentdata) {
	return new Promise(function(resolve, reject) {
	client.connect(err =>{
		if(err) throw err;
		
		client.db("120_game_db").collection("Codes").insertOne(sentdata, function(err, docs) {
			if(err) reject (new Error("couldn't add code"));
			//console.log("code added!");
			resolve(docs);
			//client.close();
		});
	});
})
}

module.exports = { getData, sendData, findCode};