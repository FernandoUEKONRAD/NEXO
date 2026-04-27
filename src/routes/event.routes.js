const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const verifyToken = require("./validate_token");