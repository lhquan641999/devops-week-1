const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER || 'admin1',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'users1',
  password: process.env.DB_PASSWORD || 'admin1',
  port: 5432,
})

const getUsers = (request, response) => {
  
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers
}