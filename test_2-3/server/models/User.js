const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const User = [
  {
    _id: "number",
    name: "string",
    email: "string",
    password: "string",
    image: "string",
    token: "string",
  },
];

//비밀번호 암호화
const encryptPassword = (userPassword, callback) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return err;

    bcrypt.hash(userPassword, salt, (err, hash) => {
      if (err) return err;
      return callback(hash);
    });
  });
};

//토큰 생성
const generateToken = (userId, userToken, callback) => {
  const token = jwt.sign(userId, "secretToken");

  userToken = token;
  callback(userToken);
};

//암호화된 비밀번호 비교 확인
const comparePassword = (plainPassword, userPassword, callback) => {
  bcrypt.compare(plainPassword, userPassword, (err, isMatch) => {
    if (err) return callback(err);
    return callback(null, isMatch);
  });
};

module.exports = { User, encryptPassword, generateToken, comparePassword };
