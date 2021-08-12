const express = require('express')
const CoordinatesController = require('../controllers/coordinatesController')
const router = express.Router()

// get most recent coordinates
router.get('/lastCoordinates', CoordinatesController.getLastCoordinates )

// get all coordinates
router.get('/allCoordinates', CoordinatesController.getAllCoordinates)

module.exports = router
