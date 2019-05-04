const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`The server is up on port ${PORT}`);
});
