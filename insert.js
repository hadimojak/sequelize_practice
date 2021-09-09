const Sequelize = require("sequelize");
const Student = require('./createModel').Student;
const db = require('./createModel').db;



for (let i = 0; i < 10; i++) {
    Student.create({
        name: (['haid', 'mohsen', 'hamed', 'ahmad', 'haid', 'mohsen', 'hamed',
            'ahmad', 'haid', 'mohsen'])[parseInt(Math.random() * 10)]
        , age: 10 + parseInt(Math.random() * 10)
    })
        .then(data => {
            console.log('new row inserted');
            db.sync();
        })
        .catch(err => { console.log(err); });
}

