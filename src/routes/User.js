const express = require("express");
const router = express.Router();

/** Get all users */
router.get("/user", async (req, res) => {
  try {
    res.status(200).send({ data: "User list" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/** Get specify user by id */
router.get("/user/:id", async (req, res) => {
  try {
    res.status(200).send({ data: `Get user ${req.params.id}` });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/** Create new users */
router.post("/users", async (req, res) => {
  try {

    

  } catch (error) {
    res.status(500).send(error.message);
  }
});

/** Update user */
router.patch('/user/:id', async(req, res) => {
    try{


    }catch(error){
        res.status(500).send(error.message)
    }
})

/** Delete User */
router.delete('/user/:id', async(req, res) => {
    try{

        
    }catch(error)
    {
        res.status(500).send(error.message)
    }
})
module.exports = router;
