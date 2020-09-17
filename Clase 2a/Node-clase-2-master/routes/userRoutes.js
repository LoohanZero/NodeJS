const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  putUser,
  postUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.delete("/:id", deleteUser);
router.put("/:id", putUser);

module.exports = router;
