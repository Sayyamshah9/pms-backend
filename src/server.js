const express = require("express");
const app = express();

const PORT = 3001;

app.use(express.json());
app.use("/api/v1", require("./Routers/index"));

app.get("/", (req, res) => {
  res.json({
    message: "Server is Up and Running",
  });
});

app.listen(PORT, () => {
  console.log("Server is Up and Running");
});
