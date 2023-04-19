module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
