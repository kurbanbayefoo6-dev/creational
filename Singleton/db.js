const DbConnection = require('./dbconnection.js')

async function main() {
	const db = DbConnection.getConnection({
		host: process.env.DB_HOST,
		port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		connectionString: process.env.DATABASE_URL,
	})

	const query = process.env.DB_QUERY || 'SELECT NOW()'
	const result = await db.query(query)

	console.log(result.rows)
}

main().catch(error => {
	console.error('Database error:', error.message)
})
