const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public
const resgisterUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User!" });
});





module.exports = { resgisterUser };