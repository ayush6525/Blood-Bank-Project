const express = require('express')

// rest object
const app = express();

//routes
// 1 test route
app.use('/api/v1/test', require("./routes/testRoutes.js"));

// PORT
const PORT = 8080;

// LISTEN
app.listen(PORT, () => {
    console.log("Node server Running");
});