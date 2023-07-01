const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../model/user");

const signupUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };

    const newUser = new User(user);
    await newUser.save();

    console.log(user);

    return res.status(200).json({ msg: "SignUp Successfully" });
  } catch (err) {
    return res.status(500).json({ msg: "Error in Signing up" });
  }
};

const loginUser = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email });
  if (!userFound) {
    return res.status(404).json({ msg: "User email does not exist" });
  }
//   console.log(req.body, userFound);

  try {
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userFound.password
    );
    // console.log(process.env.ACCESS_SECRET_KEY);
    if (passwordMatch) {
      const accessToken = await jwt.sign(
        { userFound },
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: process.env.EXPIRE_TIME }
      );

      res.status(200).json({
        accessToken: accessToken,
        name: userFound.name,
        msg: "You are logged in successfully",
      });
    } else {
      res.status(400).json({ msg: "Password does not match" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Error while login the user" });
  }
};

module.exports = { signupUser, loginUser };
