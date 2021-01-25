const router = require('express').Router()
const {User} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const newArr = require('./helper')
module.exports = router

//get all creditors
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

//get all creditor's data with total balance and avg minpp
router.get('/creditors/creditorData', async (req, res, next) => {
  try {
    const data = await User.findAll()
    const route = newArr(data)
    res.json(route)
  } catch (error) {
    next(error)
  }
})

//get creditors by id
router.get('/:userId', async (req, res, next) => {
  try {
    const singleUser = await User.findOne({
      where: {id: req.params.userId}
    })
    res.json(singleUser)
  } catch (error) {
    next(error)
  }
})

//get creditors by creditor name
router.get('/creditorNames/:creditorName', async (req, res, next) => {
  try {
    const creditorUsers = await User.findAll({
      where: {
        creditorName: req.params.creditorName
          .split('-')
          .join(' ')
          .toLocaleUpperCase()
      }
    })
    res.json(creditorUsers)
  } catch (error) {
    next(error)
  }
})

//implement credit analysis, finding creditors with balances greater than 2000 and minPP of less than or equal to 29.99
router.get('/creditAnalysis/filter', async (req, res, next) => {
  try {
    const creditAnalysis = await User.findAll({
      where: {
        balance: {[Op.gt]: 2000},
        minPaymentPercentage: {[Op.lte]: 29.99}
      }
    })
    res.json(creditAnalysis)
  } catch (error) {
    next(error)
  }
})

//add a new creditor
router.post('/', async (req, res, next) => {
  try {
    await User.create(req.body)
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

//update creditor info based on their id
router.put('/:userId', async (req, res, next) => {
  try {
    const updatedUsers = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    const updateUsers = await updatedUsers.update(req.body)
    res.json(updateUsers)
  } catch (error) {
    next(error)
  }
})

//delete a creditor based on their id
router.delete('/:userId', async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.userId
      }
    })
    const users = await User.findAll()
    res.status(201).json(users)
  } catch (error) {
    next(error)
  }
})
