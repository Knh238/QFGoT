const Sequelize = require('sequelize');
const db = require('../db');

const Keyword = db.define('keyword', {
  term: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  taggedVideos: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Keyword;
