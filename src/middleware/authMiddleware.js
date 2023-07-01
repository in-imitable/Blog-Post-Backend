require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  var tokenheader = req.headers["authorization"];
  if (tokenheader !== undefined) {
    try {
      var data = tokenheader.split(" ");
      const token = data[1];
      jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, authdata) => {
        if (error) {
          res.json(401, { msg: error.message });
          return;
        }
        req.user = authdata.user;
        next();
      });
    } catch (error) {
      res.json(401, { msg: "recheck token formate" });
    }
  } else {
    res.json(401, { msg: "token is not provided" });
  }
};

module.exports = authMiddleware;
