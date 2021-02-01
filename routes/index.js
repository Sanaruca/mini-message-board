var express = require("express");
var router = express.Router();
const messages = [
  {
    user: "Lian",
    message: "Hola",
    date: new Date(),
  },
  {
    user: "Samuel",
    message: "Que tal 😎",
    date: new Date(),
  },
  {
    user: "Roxter",
    message: "Hi!",
    date: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini message board", messages: messages });
});

//------------------------------------------------------//
router.get("/new", (req, res, next) => {
  res.render("form", { title: "New message" });
});

router.post("/new", (req, res, next) => {
  messages.unshift({
    user: req.body.user,
    message: req.body.message,
    date: new Date(),
  });
  res.redirect("/");
});

//------------------------------------------------------//

module.exports = router;
