const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectDb = require("./Db");
const testRoutes = require("./routes/test");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Connect Routes
app.use("/api", testRoutes);

// conect to mongo db
connectDb().then(() => {
  // start server
  app.listen(PORT, () => {
    console.log(`listening from port ${PORT} `);
  });
});
