const orm = require('../config/orm');

const burger = {
    renderAll: function(res) {
        orm.selectAll(res, 'burgers');
    },
    createBurger: function(res, title) {
        const newBurger = {
            burger_name: title,
            devoured: false
        };
        orm.insertOne('burgers', newBurger);
    },
    devourOne: function(burgerid) {
        //table, setColumn, columnValue, rowID
        orm.updateOne('burgers', 'devoured', true, burgerid);
    }
}

//      Reference for building burger methods
// const obj = {
//     selectAll: function (table) {
//         const query = 'SELECT * FROM ??'
//         connection.query(query, table, (err, results)=> {
//             if (err) throw err;
//             console.table(results);
//         });
//     },
//     insertOne: function (table , newRow ) {
//         const query = `INSERT INTO ?? SET ?`;
//         connection.query(query, [table, newRow], (err, results)=> {
//             if (err) throw err;
//         });
//     },
//     updateOne: function (table, setColumn, columnValue, rowID ) {
//         // const {id,burger_name, devoured} = burger;
//         const query = `UPDATE ?? SET ?? = ? WHERE id = ?`
//         connection.query(query, [table, setColumn, columnValue, rowID],(err, results)=> {
//             if (err) throw err;
//         });
//     }
// }
module.exports = burger;