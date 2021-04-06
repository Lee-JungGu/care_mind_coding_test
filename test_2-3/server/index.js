const express = require("express");
const app = express();
const port = 5000;
const {
  User,
  encryptPassword,
  generateToken,
  comparePassword,
} = require("./models/User");

//application/json
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.post("/api/users/login", (req, res) => {
  const user = User.find((user) => user.email === req.body.email);

  if (!user) {
    return res.json({
      loginSuccess: false,
      message: "해당하는 이메일이 없습니다.",
    });
  }

  comparePassword(req.body.password, user.password, (err, isMatch) => {
    if (!isMatch) {
      return res.json({
        loginSuccess: false,
        message: "비밀번호가 틀렸습니다.",
      });
    }

    generateToken(user._id, user.token, (userToken) => {
      res.json({
        loginSuccess: true,
        userId: user._id,
        userToken: userToken,
        userName: user.name,
        userImage: user.image,
      });
    });
  });
});

app.post("/api/users/register", (req, res) => {
  const user = User.find((user) => user.email === req.body.email);

  if (user) {
    return res.json({
      registerSuccess: false,
      message: "해당하는 이메일 계정이 이미 있습니다.",
    });
  }

  encryptPassword(req.body.password, (hash) => {
    req.body.password = hash;
    User.push(req.body);
    res.json({ registerSuccess: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
