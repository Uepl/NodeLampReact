const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");
const { swaggerUi, swaggerSpec } = require("../config/swagger.js");
const prisma = require("../config/prisma");
const { Public } = require("@prisma/client/runtime/library");
const bodyParser = require('body-parser')

//-------------------------Alternative to prisma-------------------------
// const connection = mysql.createConnection({
//   host: "database",
//   port: 3306,
//   user: "test",
//   password: "test",
//   database: "mydb",
// });
//-------------------------------------------------------------------

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

readdirSync("./src/routes").map((c) => app.use("/api", require("./routes/" + c)));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
    res.send({message: 'success'})
    console.log("Hello this is express");
});
app.listen(PORT, () => {
  console.log(`Server has been running on PORT ${PORT}`);
});

app.get("/news", (req,res) => {
  res.send({message: 'this is news'})
  console.log("i dont know what to do here, yet");
})

app.get("/about", (req,res) => {
  res.send({message: 'this is about'});
  console.log("this is about")
})

app.get("/login", (req,res) => {
  res.send({message: 'this is login'})
  console.log("this is login")
})




// const cantripMap = new Map();

// app.get("/", (req, res) => {
//     const entriesArray = Array.from(cantripMap, ([key, value]) => `${key}: ${value}`);
//     res.send("All Cantrips: " + entriesArray.join(', '));
// });

// app.post("/cantrip", (req, res) => {  
//     cantripMap.set(req.body.name,req.body.range);
//     res.send(req.body);
// });

// app.get("/entry/:name", (req, res) => {
//     let entryName = req.params.name;
//     if (cantripMap.has(entryName)) {
//         const value = cantripMap.get(entryName);
//         res.send(entryName + ":" + value); 
//       } else {
//         res.send("No entry found"); 
//       }
// });

// app.put("/update", (req, res) => {  
//     let toUpdate = cantripMap.get(req.body.name);
//     if(toUpdate) {
//         cantripMap.set(req.body.name, req.body.range);
//         res.send('Updated: ' + req.body.name)
//     } else {
//         res.send('Cantrip not found');
//     }
// });

// app.delete('/delete', function (req, res) {
//     let toDelete = cantripMap.get(req.query.name);
//     if(toDelete) {
//         cantripMap.delete(req.query.name);
//         res.send('Deleted: ' + req.query.name)
//     } else {
//         res.send('Cantrip not found');
//     }
//   });