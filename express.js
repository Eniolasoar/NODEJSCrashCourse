const express=require('express')
const path=require('path');
const moment=require('moment');

const app=express();
const PORT=process.env.PORT || 5000;


// app.get('/',(req,res)=>{
//     // res.send('HELLO WORLD');
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })
const members=[
    {id:1,name:'John Doe',email:'john@gmail.com',status:'active'},
    {id:2,name:'Joe Doe',email:'james@gmail.com',status:'inactive'},
    {id:3,name:'Jane Doe',email:'bob@gmail.com',status:'active'},
];

const logger= (req,res,next) =>{
    console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}:${moment().format()}`);
    next();
}
//Init middleware-It runs on every request
app.use(logger)

app.get('/api/members',(req,res) =>{
res.json(members)
})

app.get('api/members/:id',(req,res) =>{
    const found=members.some(member=>member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member =>member.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg:'Message not found'})
    }
})

app.use (express.static(path.join(__dirname,'public')))


app.listen(PORT,()=>console.log('PORT RUNNING'))