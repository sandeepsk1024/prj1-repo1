const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://db-main:27017';

// Database Name
const dbName = 'prj1db';




const getTodo = (title) => ({
    title
})

module.exports = {
    Todos: {
        getAll: () => {
            // Create a new MongoClient
            const client = new MongoClient(url);

            // Use connect method to connect to the Server
            client.connect(function (err) {
                console.log("Connected successfully to server");

                const db = client.db(dbName);
                console.log(db)
                client.close();

                

                
            });

            return [
                getTodo("eat"),
                getTodo("fast"),
                getTodo("sleep"),
                getTodo("work")
            ]
            
        }
    }
}