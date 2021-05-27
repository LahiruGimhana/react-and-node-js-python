const express = require("express");
const app = express();
 const cors = require("cors");
 var bodyParser = require('body-parser')
 // create application/json parser
// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
 app.use(cors());
app.use(express.json());


app.post("/input", (req, res) => {
  console.log(req.body);
  //console.log(req.body.distric);

  res.send("SDFDSFDSF")

  // const name = req.body.name;
  // const age = req.body.age;
  // const distric = req.body.distric;

// console.log(distric);
console.log("Hello World");

console.log('-uvhkvujhv');
// console.log(`${distric}`);
});

app.get("/result", (req, res) => {
  res.send("response from result");

  // db.query("SELECT * FROM employees", (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send(result);
  //   }
  // });
});



app.listen(3001, () => {
  console.log("Yes, your server is running on port 3001");
});
