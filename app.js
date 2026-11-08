const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

let locations = [
  {
    _id: 1,
    name: "Lake Murray",
    state: "South Carolina",
    type: "Freshwater",
    fish: "Largemouth Bass, Striped Bass, Catfish"
  },
  {
    _id: 2,
    name: "Lake Hartwell",
    state: "South Carolina",
    type: "Freshwater",
    fish: "Largemouth Bass, Spotted Bass, Crappie"
  },
  {
    _id: 3,
    name: "Santee Cooper Lakes",
    state: "South Carolina",
    type: "Freshwater",
    fish: "Catfish, Largemouth Bass, Crappie"
  }
];

app.get("/api/locations", (req, res) => {
  res.send(locations);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("I'm listening");
});
