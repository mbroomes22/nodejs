const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  creditorName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  minPaymentPercentage: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  balance: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = User
