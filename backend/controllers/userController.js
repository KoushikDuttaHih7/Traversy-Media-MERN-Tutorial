// desc  === Register User
// route  === Post /api/users
// access  === Public

const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// desc  === Authenticate User
// route  === Post /api/users/login
// access  === Public

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// desc  === Get User Data
// route  === Get /api/users/me
// access  === Public

const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
