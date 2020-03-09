const jwt = require("jsonwebtoken");
const models = require("../models");
const bcrypt = require("bcrypt");
const User = models.user;
const Pet = models.pet;
const Species = models.species;

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; //req.body buat postman

    const user = await User.findOne({ where: { email } });
    if (user) {
      let verify = bcrypt.compareSync(password, user.password);
      if (verify) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.status(200).send({ data: { email, token } }); // respon di postman
      } else {
        res.status(200).send({ data: { message: "Wrong Password" } });
      }
    } else {
      res.status(200).send({ data: { message: "Invalid login" } }); //respon di postman
    }
  } catch (err) {
    console.log(err);
  }
};

exports.register = async (req, res) => {
  const { breeder, email, password, phone, address, pet } = req.body; //req.body buat postman
  const { name, gender, id_species, about_pet, photo, id_user, age } = pet; // dipisahin karena pet punya attribute lagi, ambil pet yg diatas

  try {
    const check = await User.findOne({
      where: { email } //check ada nggak yang email sama pake email yg diinput
    });

    if (check) {
      // kalo ada
      res.status(401).send({ message: "Email Exists" }); //respon di postman
    } else {
      if (!check) {
        //kalo gaada
        const hash = await bcrypt.hash(password, 10);
        const user1 = await User.create({
          //insert into User blablabla
          breeder,
          email,
          password: hash,
          phone,
          address
        });

        console.log(user1); //buat liat di console aja

        const pet = await Pet.create({
          //insert into Pet blablabla
          name,
          gender,
          id_species,
          age,
          id_user: user1.dataValues.id,
          about_pet,
          photo
        });

        console.log(pet);

        const token = jwt.sign(
          //buat token pake user id dan secret key
          { user_id: user1.dataValues.id },
          process.env.SECRET_KEY
        );

        res.send({ email, token }); // respon di postman
      }
    }
  } catch (err) {
    console.log(err);
  }
};
