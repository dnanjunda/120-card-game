require('dotenv').config();

// input parameters based on env
const config = {
    app: {
        port: 9000
    },
    
    db_uri: process.env.MONGO_URI
}

module.exports = config;