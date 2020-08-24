"use strict";

const dotenv = require("dotenv").config({path: "../.." + "/.env"});

if (dotenv.error) {
  throw dotenv.error;
}
const { parsed: envs } = dotenv;

module.exports = envs;