const asyncHandler = require("express-async-handler");
const { findByIdAndUpdate } = require("../models/CallModel");

const Calls = require("../models/CallModel");

const User = require("../models/UserModel");

const getCalls = asyncHandler(async (req, res) => {
  const { name } = req.user;
  const calls = await Calls.find({ name: name });

  res.status(200).json(calls);
});

const sendCalls = asyncHandler(async (req, res) => {
  if (!req.body.number) {
    res.status(400);
    throw new Error("Please add number");
  }


  const call = await Calls.create({
    number: req.body.number,
    user: req.user.name,
    username: req.body.name,
  });

  res.status(200).json(call);
});

module.exports = {
  getCalls,
  sendCalls,
};
