const express = require('express')

const Coordinates = require('../models/coordinatesModel')

const router = express.Router()

//having trouble here
router.get('/coordinates', async (req, res) => {
  await Coordinates.find({}, (err, coordinates) => {
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }
      if (!coordinates.length) {
          return res
              .status(404)
              .json({ success: false, error: `Coordinates not found` })
      }
      return res.status(200).json({ success: true, data: coordinates })
  }).catch(err => console.log(err))
})

module.exports = router
