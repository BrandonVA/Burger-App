const connection = require('./connection');
const orm = {
    selectAll: function (res, table, cb) {
        const query = 'SELECT * FROM ??; ';
        connection.query(query, table, (err, results) => {
            if (err) throw err;
             cb(results);
        });
    },
    insertOne: function (table, newRow) {
        const query = `INSERT INTO ?? SET ?`;
        connection.query(query, [table, newRow], (err, results)=> {
            if (err) throw err;
        });
    },
    updateOne: function (table, setColumn, columnValue, rowID ) {
        const query = `UPDATE ?? SET ?? = ? WHERE id = ?`;
        connection.query(query, [table, setColumn, columnValue, rowID],(err, results)=> {
            if (err) throw err;
        });
    }
}
module.exports = orm;