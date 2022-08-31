const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
});

app.get("/contact", (req, res) => {
    res.send("contact me");
});

app.get("/about", (req, res) => {
    res.send("about me");
});

app.get("/hobby", (req, res) => {
    res.send("hobby");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

