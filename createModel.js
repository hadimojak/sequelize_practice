const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize('test', 'root', '2525',
    { host: 'localhost', dialect: 'mysql' });

const Student = db.define('Student', {
    name: DataTypes.STRING(40),
    age: DataTypes.INTEGER(2)
});

db.sync().then(data => { console.log('table created'); }).catch(err => { console.log(err); });