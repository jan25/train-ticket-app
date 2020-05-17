import express from "express";
import {
  handleLogin,
  getProfile,
  updateProfile,
  createNewUser,
} from "./handler";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/radio", (req, res) => {
  res.send("Radio check!");
});

app.post("/api/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;

  if (typeof email === "undefined" || typeof password === "undefined") {
    res.sendStatus(400).send("Email and password must be supplied.");
  } else {
    const result = createNewUser({
      name,
      email,
      password,
      phone,
    });
    if (!result.ok) {
      res.status(400).send(result.errorMessage);
    } else {
      res.json(result.data);
    }
  }
});

app.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (typeof email === "undefined" || typeof password === "undefined") {
    res.sendStatus(401);
  } else {
    const result = handleLogin(email, password);
    if (!result.ok) {
      res.status(401).send(result.errorMessage);
    } else {
      res.json(result.data);
    }
  }
});

app.get("/api/users/:userId/profile", (req, res) => {
  const userId: string = req.params.userId;
  if (typeof userId === "undefined") {
    res.status(400).send("Invalid userId");
  } else {
    const result = getProfile(userId);
    if (!result.ok) {
      res.status(400).send(result.errorMessage);
    } else {
      res.json(result.data);
    }
  }
});

app.post("/api/users/:userId/profile", (req, res) => {
  console.log(req.body);
  const result = updateProfile({
    userId: req.params.userId,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  res.json(result.data);
});

app.listen(PORT, "0.0.0.0", (err) => console.log("Server started on 3000"));
