const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.send('Maintainance Mode');
// });

app.use(express.static(path.join(__dirname, "public")));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, (req, res) => {
  console.log(`The server is up on port ${PORT}`);
});
