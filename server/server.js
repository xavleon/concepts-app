const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const messageRoute = require("./routes/messsageRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mrmleon93:BwNEbNMYbrZBoA8k@cluster0.usg5npp.mongodb.net/"
  )
  .then(() => {
    console.log("MongoDB is up and online");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.use("/api/messages", messageRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
