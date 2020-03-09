const jwt = require("jsonwebtoken");
const models = require("../models");
const bcrypt = require("bcrypt");
const User = models.user;
const Pet = models.pet;
const Species = models.species;
const Payment = models.payment;

exports.showUser = async (req, res) => {
  try {
    const { id } = req.params;
    const find1 = await User.findOne({ where: { id } });
    if (find1) {
      res.send({ message: "Data found", data: find1 });
    } else {
      res.send({ message: "Data not found" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { breeder, address, phone, createdAt, updatedAt } = req.body;

  try {
    const user1 = await User.update(
      {
        breeder,
        address,
        phone
      },
      {
        where: { id }
      }
    );

    const data1 = await User.findOne({
      where: { id },
      attributes: {
        include: ["createdAt", "updatedAt"]
      }
    });
    if (data1) {
      res.send({ message: "Data Updated", data: data1 });
    } else {
      res.send({ message: "Updating Failed" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.destroyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const destroy1 = await User.destroy({
      where: { id }
    });

    if (destroy1) {
      res.status(200).send({ message: "Delete success", data: destroy1 });
    } else {
      const data = await User.findAll();
      res.status(404).send({ message: "Delete failed", data });
    }
  } catch (err) {
    console.log(err);
  }
};
