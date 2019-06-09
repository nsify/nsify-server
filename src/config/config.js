module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'nsify',
    user: process.env.DB_USER || 'nsify',
    password: process.env.DB_PASS || 'nsify',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './nsify.sqlite'
    }
  }
}
