const DbConnection = require('./dbconnection.js');

async function main() {
    const db = DbConnection.getConnection();

    const result = await db.query('SELECT NOW()');

    console.log(result.rows);
}

main();