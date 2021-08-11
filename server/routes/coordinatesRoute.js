const express = require('express')

const CoordinatesController = require('../controllers/coordinatesController')

const router = express.Router()

//having trouble here
router.get('/coordinates', CoordinatesController.getCoordinates)

module.exports = router