const {Pool} = require('pg');

class DbConnection {
		static pool;
	  static getConnection() {
			if (!DbConnection.pool) {
				DbConnection.pool = new Pool({
					host: 'localhost',
					port: 5432,
					user: "postgres",
					password: "1234",
					database: "testdb",
				});
			}
			return DbConnection.pool;
		}
}

module.exports = DbConnection;