const Coordinates = require('../models/coordinatesModel')

// get last coordinates
getLastCoordinates = async (_, res) => {
    await Coordinates.find({}).sort({time: -1}).limit(1).exec((err, coordinates) => {
        try {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!coordinates) {
                return res
                    .status(404)
                    .json({ success: false, error: `Coordinates not found` })
            }
            return res.status(200).json({ success: true, data: coordinates })
        } catch {
            err => console.log(err)
        }
    })
}

// get all coordinates
getAllCoordinates = async (_, res) => {
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
}

postCoordinate = (req, res) => {
    const coordinates = new Coordinates({long: req.query.long, lat: req.query.lat, time: req.query.time});
    coordinates.save(function(err) {
        if(err) {
            console.log(err)
            res.send(err)
        } else {
            res.send("Success")
        }  
    })
    
}

module.exports = {
    getAllCoordinates,
    getLastCoordinates,
    postCoordinate
}