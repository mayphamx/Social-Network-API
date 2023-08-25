const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.plz2cr8.mongodb.net/socialnetworkDB');

module.exports = connection;
