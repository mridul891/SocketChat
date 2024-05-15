const mongoose = require("mongoose")

const messageModel = new mongoose.Schema({}, { timestamps: true })

const Message = mongoose.model("Message" , messageModel)

module.exports = Message