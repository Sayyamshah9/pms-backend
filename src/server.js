const express = require("express");
require("dotenv").config();
const { createConnection } = require("./DataLayer/dbQueries");
// const useragent = require("useragent");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/v1", require("./Routers/index"));

app.get("/", (req, res) => {
  // const userAgentDemo = req?.headers["user-agent"];
  // res.json(useragent.parse(userAgentDemo));
  res.json({
    activity: "API Health Check",
    message: "PMS Server is Up and Running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Up and Running on Port ${PORT}`);
});

createConnection();
