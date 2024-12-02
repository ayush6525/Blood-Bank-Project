const express = require('express')

// rest object
const app = express();

//routes
// 1 test route
app.get("/",(req,res) => {
    res.status(200).json({
        message: "Welcome to Blood Bank App",
    });
});


// PORT
const PORT = 8080;

// LISTEN
app.listen(PORT, () => {
    console.log("Node server Running");
});