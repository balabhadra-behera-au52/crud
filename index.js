const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./db/config");
const user = require("./db/user");
const passport = require("passport");
const expressSession = require("express-session");
const localStrategy = require("passport-local").Strategy;
const app = express();

// Connect to the database
connectDb();

// Configure and use express-session
app.use(expressSession({ secret: "your-secret-key", resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

// Define a root route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define the register route
app.post("/register", async (req, res) => {
  const data = new user(req.body);
  const result = await data.save();
  console.log(result);
  res.json(result);
});

passport.use(new localStrategy(async (firstname, password, done) => {
  try {
    const foundUser = await user.findOne({ firstname });
    if (!foundUser) return done(null, false);

    if (foundUser.password !== password) return done(null, false);
    return done(null, foundUser);
  } catch (error) {
    return done(error, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const foundUser = await user.findById(id);
    done(null, foundUser);
  } catch (error) {
    done(error, null);
  }
});

// Define the login route with authentication
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

//Define the signup route
app.post("/signup", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    const foundUser = await user.findOne(req.body);
    if (foundUser) {
      res.send(foundUser);
    } else {
      res.status(401).send({ result: "user not found" });
    }
  }
});

app.listen(5000, () => {
  console.log("App is running on port 5000");
});
