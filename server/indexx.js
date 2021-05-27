const express = require("express");
const app = express();
// const cors = require("cors");

// app.use(cors());
app.use(express.json());


app.post("/input", (req, res) => {
  // const name = req.body.name;
  // const age = req.body.age;
  const distric = req.body.distric;
// console.log(distric);

console.log('++++++=');
console.log(`${distric}`);
});

app.get("/result", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.listen(3001, () => {
  console.log("Yes, your server is running on port 3001");
});
