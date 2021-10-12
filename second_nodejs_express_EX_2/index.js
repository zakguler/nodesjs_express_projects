// https://www.youtube.com/watch?v=l8WPWK9mS5M

import express from "express"; //<=== add to package.json.. "type": "module", to use the new import syntax
// const express = require('express');

import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));


app.listen(PORT, () =>console.log(`z_Server running on port: http://localhost:${PORT}`));
