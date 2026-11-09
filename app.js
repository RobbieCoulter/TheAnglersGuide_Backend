const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

let locations = [
  {
    _id: 1,
    name: "Charleston Harbor",
    type: "Saltwater",
    image: "charleston.png",
    description: "Charleston's harbor, creeks, and nearby inlets provide excellent inshore fishing throughout the year. Common catches include redfish, spotted seatrout, flounder, and black drum."
  },
  {
    _id: 2,
    name: "Hilton Head",
    type: "Saltwater",
    image: "hiltonhead.png",
    description: "Fish the tidal creeks, sounds, and coastal waters surrounding one of South Carolina's best-known barrier islands. Common catches include redfish, spotted seatrout, flounder, and sheepshead."
  },
  {
    _id: 3,
    name: "Murrells Inlet",
    type: "Saltwater",
    image: "murells.png",
    description: "This coastal inlet offers productive fishing from marsh creeks and jetties to nearshore and offshore waters. Common catches include flounder, redfish, black drum, and Spanish mackerel."
  },
  {
    _id: 4,
    name: "Myrtle Beach",
    type: "Saltwater",
    image: "myrtle.png",
    description: "Piers, beaches, and offshore waters give anglers a variety of ways to fish along the Grand Strand. Common catches include whiting, pompano, flounder, and Spanish mackerel."
  },
  {
    _id: 5,
    name: "Lake Murray",
    type: "Freshwater",
    image: "murray.png",
    description: "A large Midlands reservoir known for excellent bass and striped bass fishing just outside Columbia. Common catches include striped bass, largemouth bass, crappie, and catfish."
  },
  {
    _id: 6,
    name: "Lake Marion",
    type: "Freshwater",
    image: "marion.png",
    description: "South Carolina's largest lake offers expansive waters, flooded timber, and excellent fishing opportunities. Common catches include catfish, largemouth bass, striped bass, and crappie."
  },
  {
    _id: 7,
    name: "Lake Hartwell",
    type: "Freshwater",
    image: "hartwell.png",
    description: "This large Upstate reservoir provides miles of shoreline and productive fishing throughout the year. Common catches include largemouth bass, spotted bass, striped bass, and crappie."
  },
  {
    _id: 8,
    name: "Chattooga River",
    type: "Freshwater",
    image: "chattooga.png",
    description: "A scenic mountain river along the South Carolina border known for cold water and excellent trout fishing. Common catches include rainbow trout, brown trout, and brook trout."
  }
];

app.get("/api/locations", (req, res) => {
  res.send(locations);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("I'm listening");
});
