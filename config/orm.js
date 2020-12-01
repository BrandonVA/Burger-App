const connection = require('./connection');
const dbCalls = {
    selectAll: function () {
        connection.query('SELECT * FROM burgers',(err, results)=> {
            if (err) throw err;
            console.table(results);
        });
    },
    insertOne: function (newBurger) {
        const query = `INSERT INTO burgers SET ?`;
        connection.query(query, newBurger, (err, results)=> {
            if (err) throw err;
        });
    },
    updateOne: function (burger) {
        const {id,burger_name, devoured} = burger;
        const query = `UPDATE burgers SET devoured = ? WHERE id = ?`
        connection.query(query, [devoured, id],(err, results)=> {
            if (err) throw err;
        });
    }
}
module.exports = dbCalls;