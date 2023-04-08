const express = require("express");
const router = express.Router();
const { getContacts, createContacts, getContact, updateContact, deleteContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateToken");


router.use(validateToken);
router.get("/", getContacts);
router.post("/", createContacts);
router.get("/:id", getContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);




module.exports = router;
