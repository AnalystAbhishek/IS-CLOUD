const express = require("express");
const app = express();

const authRoute = require("./");

app.listen(3000, () => console.log("Server is running"));
