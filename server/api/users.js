const router = require('express').Router()
const {User} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

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

router.post('/', async (req, res, next) => {
  try {
    await User.create(req.body)
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

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
