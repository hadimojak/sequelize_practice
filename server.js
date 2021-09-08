// const mysql = require("mysql2");
//Sequelize class then we should make an instance of it
const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', '2525',
    { host: 'localhost', dialect: 'mysql' });


sequelize.authenticate().then(data => { console.log('connected'); })
    .catch(err => { console.log(err); });