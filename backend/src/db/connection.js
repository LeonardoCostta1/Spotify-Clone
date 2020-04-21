const mysql = require('mysql')
const connection = mysql.createConnection({

    // LOCALHOST

    'host':'localhost',
    'user':'root',
    'password':'12345678',
    'database':'spotifydb',
    'port':'3306',
     multipleStatements: true


    // HOSTINGER

    // 'host':'194.5.156.43',
    // 'user':'u996396992_root',
    // 'password':'twwY9W2x',
    // 'database':'u996396992_spotify',
    // 'port':'3306',
    //  multipleStatements: true

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports = connection;