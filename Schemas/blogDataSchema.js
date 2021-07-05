const mongoose = require('mongoose');

const blogDataSchema = mongoose.Schema({
    title:{
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    date: {
        type:'Date',
        default: Date.now
    },
    postCreator:{
        type:'string',
        default:'Anonymous'
    }

})

const Blogdata = mongoose.model("Blogdata", blogDataSchema)

module.exports = Blogdata;