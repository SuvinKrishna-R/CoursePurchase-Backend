const mongoose=require('mongoose')

const courseShema=new mongoose.Schema({

    cName:{
        type:String,
        required:true
    },
    cBadge:{
        type:String,
        required:true
    },
    cAbout:{
        type:String,
        required:true
    },
    cContents:{
        type:String,
        required:true
    },
    cPrice:{
        type:String,
        required:true
    },
    cProfile:{
        type:String,
        required:true
    }
})

const packages=new mongoose.model('packages',courseShema)
module.exports=packages
