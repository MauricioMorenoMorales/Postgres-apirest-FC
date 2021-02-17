const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	password: process.env.DBPASSWORD,
	database: 'restapi',
	port: '5432',
})

const getUsers = async (req, res) => {
	const response = await pool.query('SELECT * FROM users')
	res.status(200).json(response.rows)
}

module.exports = {
	getUsers,
}
