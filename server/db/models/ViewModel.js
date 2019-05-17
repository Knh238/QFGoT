const Sequelize = require('sequelize');
const db = require('../db');

const View = db.define('view', {
  brand: {
    type: Sequelize.ENUM('NowThis', 'TheDodo', 'Thrillist', 'Seeker'),
    allowNull: false
  },
  platform: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateViewed: {
    type: Sequelize.DATE,
    allowNull: false
  },
  user: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = View;
