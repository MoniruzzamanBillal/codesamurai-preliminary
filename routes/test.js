const express = require("express");
const router = express.Router();
const {
  getResults,
  getResult,
  addItem,
  updateItem,
} = require("../controller/TestController");

// test route
router.get("/test", async (req, res) => {
  try {
    res.send({ meessagee: "this is test route " });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
});

// get all result
router.get("/all", getResults);

// get particular result
router.get("/item/:id", getResult);

// add data in database
router.post("/item", addItem);

// update data
router.put("/item/:id", updateItem);

module.exports = router;
