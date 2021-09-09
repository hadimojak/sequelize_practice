const Sequelize = require("sequelize");

const db = new Sequelize('test', 'root', '2525',
    { host: 'localhost', dialect: 'mysql' });

    