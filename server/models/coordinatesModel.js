const mongoose = require("mongoose");
const Schema = mongoose.Schema

const coordinatesSchema = new Schema(
    {
        coordinates: {type: String, required: true},
    },
    {timestamps: true}
)
    

const Coordinates = mongoose.model("Coordinates", coordinatesSchema);

module.exports = Coordinates;

