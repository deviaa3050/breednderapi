const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const { admin } = require("../middleware/admin");

const pet = require("../controllers/pet");
const user = require("../controllers/user");
const match = require("../controllers/match");
const payment = require("../controllers/payment");

const { login, register } = require("../controllers/auth"); //harus sama namanya kayak controllers/auth

router.post("/login", login);

router.post("/register", register);

router.post("/species", pet.species);

router.get("/species", pet.read); //untuk species method GET

router.get("/pets", auth, pet.showAll); //harus pakai s karena findall jd jamak

router.post("/pet", auth, pet.add);

router.put("/pet/:id", auth, pet.update);

router.delete("/pet/:id", auth, pet.destroy);

router.get("/pet/:id", auth, pet.showOne); //find data pet dr id ke- blablabla

router.get("/user/:id", auth, user.showUser); //find data user dr id ke- blablabla

router.post("/user/:id", auth, user.updateUser);

router.delete("/user/:id", user.destroyUser);

router.post("/match", auth, match.addMatch);

router.get("/match", auth, match.checkMatch);

router.patch("/match/:id", auth, match.updateMatch);

router.post("/payment", auth, payment.addPayment);

router.put("/payment/:id", admin, payment.updatePayment);

module.exports = router;
