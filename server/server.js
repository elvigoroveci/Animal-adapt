const express = require("express");
const { LocalStorage } = require("node-localstorage");
localStorage = new LocalStorage("./scratch");
const loginStorage = new LocalStorage("./usersList");
const initial_pets = require("./initialData/pets");
const initial_categories = require("./initialData/categories");
const initial_users = require("./initialData/users");
const LS = require("./helpers/localStorage");
const USERS = require("./helpers/loginStorage");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 5000;

// this is important to disable cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// serve static files
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let pets = LS.all("pets");

if (pets.length === 0) {
  LS.addALL("pets", initial_pets);
}

let categories = LS.all("categories");

if (categories.length === 0) {
  LS.addALL("categories", initial_categories);
}

app.get("/api/pets", (req, res) => {
  res.json({
    status: "success",
    data: LS.all("pets"),
  });
});

app.get("/api/pets/:petsId", (req, res) => {
  res.json({
    status: "success",
    data: LS.find("pets", req.params.petsId),
  });
});

app.post("/api/pets", (req, res) => {
  const created_product = LS.create("pets", req.body);
  res.json({
    status: "success",
    data: created_product,
  });
});

app.delete("/api/pets/:petsId", (req, res) => {
  const remaining = LS.delete("pets", req.params.petsId);
  res.json({
    status: "success",
    data: remaining,
  });
});

app.get("/api/categories", (req, res) => {
  res.json({
    status: "success",
    data: LS.all("categories"),
  });
});

app.post("/api/categories", (req, res) => {
  const created = LS.create("categories", req.body);
  res.json({
    status: "success",
    data: created,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let users = USERS.all("users");

if (users.length === 0) {
  USERS.addALL("users", initial_users);
}

app.get("/api/users", (req, res) => {
  res.json({
    status: "success",
    data: USERS.all("users"),
  });

  app.post("/api/register", (req, res) => {
    const create_user = USERS.create("users", req.body);
    res.json({
      status: "registered",
      data: create_user,
    });
  });

  app.get("/api/login", (req, res) => {
    const login_user = USERS.find("users", req.body);
    res.json({
      status: "success",
      data: login_user,
    });
  });
  app.delete("/api/users/:usersId", (req, res) => {
    const remaining = USERS.delete("users", req.params.usersId);
    res.json({
      status: "user deleted",
      data: remaining,
    });
  });
});
