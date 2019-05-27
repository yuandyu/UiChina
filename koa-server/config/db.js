const Sequelize = require('sequelize');

const sequelize = new Sequelize('news', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // 仅限 SQLite
  storage: 'path/to/database.sqlite',
});

module.exports = {
  sequelize
};
