const mongoose= require('mongoose')
mongoose.connect(process.env.base_url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('------mongodb atlas connected-------');
}).catch((error)=>{
    console.log('------connection error------');
})