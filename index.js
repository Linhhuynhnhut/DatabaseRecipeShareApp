const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const tagRoute = require("./routes/tagRoute");

app.use(cors());
mongoose.set("strictQuery", false);
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/tag", tagRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running....");
});
