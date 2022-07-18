const express = require("express");

const dotenv = require("dotenv").config();

const connectDb = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 5000;

const app = express();

const callRoutes = require("./routes/callRoutes");

const userRoutes = require("./routes/userRoutes");

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/calls", callRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
