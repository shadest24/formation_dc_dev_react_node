var MongoClient = require('mongodb').MongoClient;

const connect = () => {

  var db_client;
  var db_connection;

  return new Promise((resolve, reject) => {

    MongoClient.connect('mongodb://mongo:27017', function (err, client) {
      if (err) {
        reject(err)
      }

      db_client = client;
      db_connection = client.db('todo')
      resolve({ db_client, db_connection })
    });

  })
}


module.exports = connect


