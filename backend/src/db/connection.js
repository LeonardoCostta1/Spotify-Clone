const mysql = require('mysql')
const connection = mysql.createConnection({

    'host':'localhost',
    'user':'root',
    'password':'12345678',
    'database':'spotifydb',
    'port':'3306',
     multipleStatements: true

});

module.exports = connection;