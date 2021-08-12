const mongoose = require("mongoose");
const Schema = mongoose.Schema

const coordinatesSchema = new Schema({
    long: {type: String, required: true},
    lat: {type: String, required: true},
    time: {type: String, required: true}
});
    

const Coordinates = mongoose.model("Coordinates", coordinatesSchema);

module.exports = Coordinates;

