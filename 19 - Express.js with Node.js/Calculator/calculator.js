const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;
    
    res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
    var weight = req.body.weight;
    var height = req.body.height;

    var bmi = weight / Math.pow(height, 2);

    res.send("Your BMI is " + bmi);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});