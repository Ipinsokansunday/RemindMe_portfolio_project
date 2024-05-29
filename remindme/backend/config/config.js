module.exports = {
  development: {
    username: 'ipinsokansunday',
    password: '1981',
    database: 'remindme',
    host: 'localhost', // Replace this with the actual hostname or IP address of your PostgreSQL server
    port: 5432, // Default PostgreSQL port
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};
