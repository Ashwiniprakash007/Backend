const mongoose = require("mongoose")
require('dotenv').config()

const connection = mongoose.connect("mongodb+srv://nntivari1:Nntivari1@clusternn.u5oie4k.mongodb.net/?retryWrites=true&w=majority") 

module.exports = connection