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
router.post("/", async (req, res) => {
  try {
    const datas = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await UserModel.create(datas);
    res.status(200).json(user);
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
