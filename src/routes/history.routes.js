const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).send({ data: "History datas!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
