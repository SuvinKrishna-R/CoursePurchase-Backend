const express=require('express')
const router=express.Router()
const logicPath=require('../controllers/logic')

const upload=require('../middleware/multerMiddleWare')

//add course-admin
router.post('/admin/add/courses',upload.single("user_profile"),logicPath.adminAddLogic)

// get course-user
router.get('/user/courses',logicPath.getCoursesLogic)

//register
router.post('/user/register',logicPath.registerLogic)

// user login
router.post('/user/login',logicPath.loginLogic)

// admin login 
router.post('/admin/login',logicPath.adminLogin)

// single view
router.get('/user/courses/singleview/:id',logicPath.singlePage)

// feedback
router.post('/user/courses/feedback',logicPath.feedbackLogic)

// get feedback getFeedback
router.get('/user/courses/feedback/:id',logicPath.getFeedback)

module.exports=router