var express = require('express');
const mongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
var router = express.Router();


router.get('/secret', function (req, res, next) {
  mongoClient.connect('mongodb://127.0.0.1:27017/lab7db', (err, client) => {
    if (err) throw err;
    const db = client.db('lab7db');
    db.collection('homework7').findOne({}, (err, doc) => {
      if (err) throw err;
      response.send(decipher(doc.message, res));
    });
  });
});

function decipher(encrypted, response) {
  const decipher = crypto.createDecipher('aes256', 'asaadsaad');
  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = router;
