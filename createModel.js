const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize('test', 'root', '2525',
    { host: 'localhost', dialect: 'mysql' });

const Student = db.define('Student', {
    name: { type: DataTypes.STRING(40), allowNull: false },
    age: { type: DataTypes.INTEGER(2), defaultValue: -1, allowNull: false }
});




// db.sync({ alter: true }).then(data => { console.log('table created'); }).catch(err => { console.log(err); });

module.exports = { Student, db };