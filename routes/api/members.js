const express=require('express');
const router=express.Router();
const members =require('../../memberCollection');

router.get("/", (req, res) => {
    res.json(members);
  });
  
  router.get("/:id", (req, res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id));
    if (found) {
      res.json(members.filter((member) => member.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: "Message not found" });
    }
  });


  //CREATE MEMBERS
router.post('/',(req,res)=>{
  res.send(req.body)
})


// app.get("/api/members", (req, res) => {
//     res.json(members);
//   });
  
//   app.get("/api/members/:id", (req, res) => {
//     const found = members.some((member) => member.id === parseInt(req.params.id));
//     if (found) {
//       res.json(members.filter((member) => member.id === parseInt(req.params.id)));
//     } else {
//       res.status(400).json({ msg: "Message not found" });
//     }
//   });

module.exports=router