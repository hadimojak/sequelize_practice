const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const Student = require('./createModel').Student;
const db = require('./createModel').db;

// async function task() {
//     try {
//         await db.sync();
//         const data = await Student.findAll();
//         const studentsJson = JSON.stringify(data);
//         console.log(JSON.parse(studentsJson));
//     } catch (error) {
//         console.log(error);
//     }
// };
// task();


Student.findAll({
    where:
        { age: { [Op.gt]: 20 } }
})
    .then(students => {
        if (typeof students === 'object') {
            const users = [];
            students.forEach(p => {
                users.push(p.dataValues);
            });
            console.log(users);
        }
        else { console.log(students); }

    }).catch(err => { console.log(err); });

