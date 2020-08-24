"use strict";

const dotenv = require("dotenv").config({path: __dirname + "/../../.env"});

if (dotenv.error) {
  throw dotenv.error;
}
const { parsed: envs } = dotenv;

module.exports = envs;