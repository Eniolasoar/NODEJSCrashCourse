const express = require('express');
const path = require("path");
const logger = require('./expressLogger');
// const moment=require('moment');

const app = express();
const PORT = process.env.PORT || 5000;

//BODY PARSER
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// app.get('/',(req,res)=>{
//     // res.send('HELLO WORLD');
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })


//Init middleware-It runs on every request
// app.use(logger);


app.use (express.static(path.join(__dirname,'public')))

//MEMBERS API ROUTES
app.use('/api/members',require('./routes/api/members'))

app.listen(PORT, () => console.log(`PORT RUNNING on ${PORT}`));
