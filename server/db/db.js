const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/groupNineApp`,
  {
    logging: false
  }
);
module.exports = db;

if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close());
}
