const models = require("../models");
const User = models.user;
const Pet = models.pet;
const Species = models.species;

exports.showAll = async (req, res) => {
  try {
    const pet = await Pet.findAll({
      attributes: {
        exclude: ["id_species", "id_user"]
      },
      include: [
        {
          model: Species,
          attributes: ["id", "name"]
        },
        {
          model: User,
          attributes: ["id", "breeder", "address", "phone"]
        }
      ]
    });
    console.log(pet);
    res.send(pet);
  } catch (err) {
    console.log(err);
  }
};

exports.add = async (req, res) => {
  const datapet = {
    name: req.body.name,
    gender: req.body.gender,
    id_species: req.body.species.id,
    age: req.body.age,
    id_user: req.body.user.id,
    about_pet: req.body.about_pet,
    photo: req.body.photo
  };
  try {
    const add1 = await Pet.create(datapet);
    if (add1) {
      const pet = await Pet.findOne({
        where: { id: add1.id },
        attributes: {
          exclude: ["id_species", "id_user"]
        },
        include: [
          {
            model: Species,
            attributes: ["id", "name"]
          },
          {
            model: User,
            attributes: ["id", "breeder", "address", "phone"]
          }
        ]
      });
      res.send(pet);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    gender,
    age,
    about_pet,
    photo,
    species: { id_species },
    user: { id_user }
  } = req.body;

  try {
    const pet = await Pet.update(
      {
        name,
        gender,
        age,
        about_pet,
        photo,
        id_species,
        id_user
      },
      { where: { id } }
    );
    const data = await Pet.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: "breeder",
          attributes: ["id", "breeder", "address", "phone"]
        },
        {
          model: Species,
          as: "category",
          attributes: ["id", "name"]
        }
      ],
      attributes: { exclude: ["id_user", "id_species"] }
    });
    res.status(200).send({
      status: true,
      message: "Updating data success",
      data: data
    });
  } catch (err) {
    console.log(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const delete1 = await Pet.destroy({ where: { id } });
    if (delete1) {
      res.status(200).send({ message: "Delete success", data: delete1 });
    } else {
      const data = await Pet.findAll();
      res.status(404).send({ message: "Delete failed", data });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.showOne = async (req, res) => {
  try {
    const { id } = req.params;
    const find1 = await Pet.findOne({
      where: { id },
      attributes: {
        exclude: ["id_species", "id_user"]
      },
      include: [
        {
          model: Species,
          as: "category",
          attributes: ["id", "name"]
        },
        {
          model: User,
          as: "breeder",
          attributes: ["id", "breeder", "address", "phone"]
        }
      ]
    });
    if (find1) {
      res.send({ message: "success", find1 });
    } else {
      res.status(404).send({ message: "failed", find1 });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.species = async (req, res) => {
  try {
    const { name } = req.body; //req.body buat postman

    const species1 = await Species.create({
      name //insert into species blablabla
    });

    console.log(species1);

    res.send({ id: species1.dataValues.id, name }); // respon di postman; id: species1.dataValues.id buat ambil id-nya
  } catch (err) {
    console.log(err);
  }
};

exports.read = async (req, res) => {
  //untuk species GET
  try {
    const data = await Species.findAll({});
    // console.log(species2);
    res.send({ data: data });
  } catch (err) {
    console.log(err);
  }
};
