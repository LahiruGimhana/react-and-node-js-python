const express=require('express');
const router=express.Router();

app.post("/input", (req, res) => {
    // const name = req.body.name;
    // const age = req.body.age;
    const distric = req.body.distric;
  
  
  console.log('==================');
  console.log(`${distric}`);
  });


router.get('/Result',(req,res)=>{
    const str=[{
        "name":"gimhana",
        "msg":"hello world"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addResult', (req,res)=>{
    res.end('NA');
});

// module.exports=router;
module.exports = router;