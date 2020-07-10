const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const path = require("path");

// membaca  file external
app.use(express.static("views"));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/home.html"));
});
// untuk menampilkan file html
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.listen(PORT, () =>
    console.log(`Server active on http://localhost:${PORT}`)
);