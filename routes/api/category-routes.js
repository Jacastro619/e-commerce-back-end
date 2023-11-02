const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // => from model
  // somehow send it back to the user
  //
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // specify by ID
  // get one category
  // some req.params
  // send it back to the user
});

router.post("/", (req, res) => {
  // create a new category
  //get the body and get the contents and insert into sequalize
  // catergory.create
  // whatever we created can return it back off the res.json
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  // taking in an id as a parameter and also receiving a req.body
  // sequalize update
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  // DESTROY
  // destroying based off the req.params.id
  // res.json to let the server know its gone
});

module.exports = router;
