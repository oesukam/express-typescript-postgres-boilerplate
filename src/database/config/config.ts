const common = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
  logging: false,
  seederStorage: 'sequelize',
  pool: {
    max: 5,
    min: 0,
    acquire: 60000,
    idle: 10000,
  }
}

module.exports = {
  development: {
    ...common,
  },
  test: {
    ...common,
    use_env_variable: 'DATABASE_URL_TEST',
  },
  staging: {
    ...common,
  },
  production: {
    ...common,
  },
};
