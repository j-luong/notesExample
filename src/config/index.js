module.exports = {
  express: {
    port: parseInt(process.env.EXPRESS_PORT, 10) || 3000
  },
  database: {
    // defines the connection details for PostgreSQL
    name: process.env.DATABASE_NAME || 'notes',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 26257,
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'unsecurepassword',
    pool_size: {
      min: 0,
      max: parseInt(process.env.DATABASE_MAX_POOLS, 10) || 20
    },
    acquire_connection_timeout:
      parseInt(process.env.DATABASE_TIMEOUT, 10) || 10000 // 10,000ms (10sec)
  }
};
