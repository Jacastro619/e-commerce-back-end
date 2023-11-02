const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // => from model
  // somehow send it back to the user
  //
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // specify by ID
  // get one category
  // some req.params
  // send it back to the user
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryById) {
      res.status(404).json({ message: "No category found with that id!" });
    }
    res.status(200).json(categoryById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  //get the body and get the contents and insert into sequalize
  // catergory.create
  // whatever we created can return it back off the res.json
  try {
    const addCategory = await Category.create(req.body);
    res.status(200).json(addCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  // taking in an id as a parameter and also receiving a req.body
  // sequalize update
  try {
    const updateCategory = Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Updated Successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  // DESTROY
  // destroying based off the req.params.id
  // res.json to let the server know its gone
});

module.exports = router;
