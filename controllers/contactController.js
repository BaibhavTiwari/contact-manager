const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const { error } = require("console");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});


//@desc Create New contact
//@route POST /api/contacts
//@access private
const createContacts = asyncHandler(async (req, res) => {
  console.log("the request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all fields are mandatory !!");
  }
  const contact = await Contact.create({
    name, email, phone,
  });
  res.status(201).json(contact);
});


//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("No Contact Found");
  }
  res.status(202).json(contact);
});


//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("No Contact Found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(203).json(updatedContact);
});


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("No Contact Found");
  }
  await Contact.remove();
  res.status(200).json(contact);
});



module.exports = { getContacts, createContacts, getContact, updateContact, deleteContact };
