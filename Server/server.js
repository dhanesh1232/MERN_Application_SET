const express = require("express");
const app = express();

app.listen(3002, () => {
  console.log("Server running on port 3002 \nhttp://localhost:3002");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!", success: true });
});
