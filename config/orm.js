const connection = require('./connection');
const orm = {
    selectAll: function (res,table) {
        const query = 'SELECT * FROM ??'
        connection.query(query, table, (err, results)=> {
            if (err) throw err;
            console.table(results);
            res.render("index", { burger: results });
        });
    },
    insertOne: function (table, newRow ) {
        const query = `INSERT INTO ?? SET ?`;
        connection.query(query, [table, newRow], (err, results)=> {
            if (err) throw err;
            console.table(results);
        });
    },
    updateOne: function (table, setColumn, columnValue, rowID ) {
        const query = `UPDATE ?? SET ?? = ? WHERE id = ?`
        connection.query(query, [table, setColumn, columnValue, rowID],(err, results)=> {
            if (err) throw err;
            console.table(results);
        });
    }
}
module.exports = orm;