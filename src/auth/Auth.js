const express = require("express");
const router = express.Router();
const UserModel = require("../models/user.model");

/** Get all users */
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/** Get specify user by id */
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/** Create new users */
router.post("/", async (req, res, next) => {
  
  const {email, password} = req.body;
  if(password.lenghth < 6){
    return res.status(401).send("The password needs 6 or more characteres")
  }
    try {
    const { firstName, lastName, email, password } = req.body;

    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    }).then((user) =>
      res.status(201).json({
        message: "User created successfully",
        user,
      })
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/** Update user */
router.patch("/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/** Delete User */
router.delete("/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;
