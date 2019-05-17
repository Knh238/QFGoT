const Sequelize = require('sequelize');
const db = require('../db');

const Video = db.define('video', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brand: {
    type: Sequelize.ENUM('NowThis', 'TheDodo', 'Thrillist', 'Seeker'),
    allowNull: false
  },
  storageReference: {
    type: Sequelize.STRING,
    allowNull: false
  },
  primaryVideoCategory: {
    type: Sequelize.STRING,
    allowNull: true
  },
  keywords: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  },
  publishedDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  totalViews: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  viewHistory: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  }
});

Video.findByBrand = async function(brand) {
  const response = await Video.findAll({ where: { brand: brand } });
  return response[0];
};
Video.findByTitle = async function(name) {
  const response = await Video.findAll({ where: { name: name } });
  return response[0];
};

module.exports = Video;
