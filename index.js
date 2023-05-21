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
const commentRoute = require("./routes/commentRoute");
const followRoute = require("./routes/followRoute");
const reactionRoute = require("./routes/reactionRoute");
const http = require("http");

// app.use(cors());
// mongoose.set("strictQuery", false);
dotenv.config();

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("Mongodb connected");
//   })
//   .catch((err) => {
//     console.log({ err });
//     process.exit(1);
//   });

// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(morgan("common"));

// app.use("/api/user", userRoute);
// app.use("/api/post", postRoute);
// app.use("/api/tag", tagRoute);

// const port = process.env.PORT || 8000;

// app.listen(port, () => {
//   console.log("Server is running....");
// });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);
app.use("/api/follow", followRoute);
app.use("/api/reaction", reactionRoute);
app.use("/api/tag", tagRoute);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send("error", {
    message: err.message,
    error: err,
  });
});

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected");
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });
