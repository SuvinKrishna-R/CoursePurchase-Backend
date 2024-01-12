const mongoose =require('mongoose')

const feedbackSchema=new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
        trim:true

    },
    courseId:{
        type:String,
        required:true,
        trim:true

    },
    cFeedback:{
        type:String,
        required:true,
        trim:true

    },
    cUser:{
        type:String,
        required:true,
        trim:true

    }
})

const feedbackData=new mongoose.model('feedbackData',feedbackSchema)
module.exports=feedbackData