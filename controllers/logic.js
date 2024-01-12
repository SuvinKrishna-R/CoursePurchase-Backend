const admins = require('../models/adminModel')
const packages = require('../models/course')
const feedbackData = require('../models/feedbackModel')
const users = require('../models/userModel')

// const course=require('../models/course')



// logic for add courses
const adminAddLogic=async(req,res)=>{
    const cProfile=req.file.filename

    const{cName,cBadge,cAbout,cContents,cPrice}=req.body
    if(!cName || !cBadge || ! cAbout || !cContents || ! cPrice ){
        res.status(400).json('All inputs are required')
    }
    else{
        try{
        let prePackages=await packages.findOne({cName,cContents})
        if(prePackages){
            res.status(400).json('Course already added')
        }
        else{
            let newPackages=new packages({
                cName,
                cBadge,
                cAbout,
                cContents,
                cPrice,
                cProfile
            })
            await newPackages.save()
            res.status(200).json(cName)


        }
    }
    catch{
        res.status(400).json("connection error")
    }
    }
}

// logic for get courses
const getCoursesLogic=async(req,res)=>{
    try{ const data=await packages.find();
        if(data){
            res.status(200).json(data)
        } 
        else{
            res.status(400).json("No data found")
        }}

    catch{
        res.status(400).json("connection error")
    }
   
}

// logic for register
 
const registerLogic=async(req,res)=>{
    const{uname,email,psw}=req.body
    if(!uname || !email || !psw ){
        res.status(400).json('All Inputs are required')
    }
    else{
        try{
        const preRegister=await users.findOne({email,psw})
        
        if(preRegister){
            res.status(400).json('user Already exist')
        }
        else{
            var newRegister=new users({
                uname,
                email,
                psw
            })
            await newRegister.save()
            res.status(200).json(uname)
        }
    }
    catch{
        res.status(400).json('Connection Error')
    }
    }
}

// logic for user login
const loginLogic=async(req,res)=>{
    const{uname,email,psw}=req.body
    if(!uname || !email || !psw){
        res.status(400).json('All inputs are required')
    }
    else{
        const loginUser=await users.findOne({uname,email,psw})
        if(loginUser){
            res.status(200).json({uid:loginUser._id})
        }
        else{
            res.status(400).json("User not found")
        }
    }
}

// logic for admin login
const adminLogin=async(req,res)=>{
    const{adminName,adminEmail,adminPsw}=req.body
    if(!adminName ||!adminEmail ||!adminPsw){
        res.status(400).json('All inputs are required')
    }
    else{
        const admin=await admins.findOne({adminName,adminEmail,adminPsw})
        if(admin){
            res.status(200).json({aId:admin._id})
        }
        else{
            res.status(200).json('Admin not present')
        }
    }

}

// single view
const singlePage=async(req,res)=>{
    try{
        const{id}=req.params
      
        const data=await packages.findById({_id:id})
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(400).json('No Data Found')
        }
    }

    catch(error){
        res.status(400).json('connection Error',error)
    }
  }

//   logic for feedback

const feedbackLogic=async(req,res)=>{
        const{courseName,courseId,cFeedback, cUser}=req.body
        if(!cFeedback || ! cUser){
            res.status(400).json('All Datas Are Required')
        }
        else{
            let newFeedback=new feedbackData({
                courseName,
                courseId,
                cFeedback, 
                cUser
            })
            await newFeedback.save()
            res.status(200).json(cUser)


        }
}
// logic for get feedback
const getFeedback=async(req,res)=>{
    try{
        const{id}=req.params
        console.log(id);
      
        const data=await feedbackData .find({courseId:id})
        console.log(data);
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(400).json('No Data Found')
        }
    }

    catch(error){
        res.status(400).json('connection Error',error)
    }
}

module.exports={adminAddLogic,getCoursesLogic,registerLogic,loginLogic,adminLogin,singlePage,feedbackLogic,getFeedback}