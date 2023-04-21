module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "production": {
    "username": "tramaine",
    "password": process.env.DB_PASSWORD,
    "database": "fifty-states-visited-database",
    "host": "fifty-states-visited-database-server-tramaine.database.windows.net",
    "dialect": "mssql"
  }
}
