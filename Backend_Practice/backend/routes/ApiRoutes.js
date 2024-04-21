const express = require("express");
const router = express.Router();

const {
  getAllAPI,
  createAllAPI,
  updateAPI,
  deleteAPI,
} = require("../controller/ApiController");

router.route("/")
.get(getAllAPI)
.post(createAllAPI)

router.route("/:id")
.patch(updateAPI)
// .delete(deleteAPI)



module.exports = router;
