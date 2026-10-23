const { Pool } = require('pg')

class DbConnection {
	static pool = null

	static getConnection(config = {}) {
		if (!DbConnection.pool) {
			const connectionConfig = {
				host: config.host ?? process.env.DB_HOST,
				port: config.port ?? process.env.DB_PORT,
				user: config.user ?? process.env.DB_USER,
				password: config.password ?? process.env.DB_PASSWORD,
				database: config.database ?? process.env.DB_NAME,
				connectionString: config.connectionString ?? process.env.DATABASE_URL,
			}

			DbConnection.pool = new Pool(connectionConfig)
		}

		return DbConnection.pool
	}

	static async closeConnection() {
		if (DbConnection.pool) {
			await DbConnection.pool.end()
			DbConnection.pool = null
		}
	}
}

module.exports = DbConnection
