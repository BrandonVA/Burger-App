const connection = require('./connection');
// Creating an ORM for mysql.
const orm = {
    // Method for selecting all the rows in the given table with a callback function passing through the data received. 
    selectAll: function (table, cb) {
        const query = 'SELECT * FROM ??; ';
        connection.query(query, table, (err, results) => {
            if (err) throw err;
             cb(results);
        });
    },
    // Insert new a new row into the given table with the passed through data.
    insertOne: function (table, newRow) {
        const query = `INSERT INTO ?? SET ?`;
        connection.query(query, [table, newRow], (err, results)=> {
            if (err) throw err;
        });
    },
    // Updating a rows column based on the row id with the given value passed through for a given table.
    updateOne: function (table, setColumn, columnValue, rowID ) {
        const query = `UPDATE ?? SET ?? = ? WHERE id = ?`;
        connection.query(query, [table, setColumn, columnValue, rowID],(err, results)=> {
            if (err) throw err;
        });
    }
}
module.exports = orm;