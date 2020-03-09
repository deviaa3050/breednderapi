const jwt = require("jsonwebtoken");
const models = require("../models");
const bcrypt = require("bcrypt");
const User = models.user;
const Pet = models.pet;
const Species = models.species;
const Payment = models.payment;

exports.addPayment = async (req, res) => {
  const { id_user, no_rec, proof_tf, status } = req.body;
  try {
    const add = await Payment.create({
      id_user,
      no_rec,
      proof_tf,
      status
    });
    console.log(add);
    if (add) {
      const add1 = await Payment.findOne({
        where: { id: add.id },
        attributes: {
          exclude: ["id", "id_user", "createdAt", "updatedAt"]
        },
        include: [
          {
            model: User,
            as: "pay",
            attributes: {
              include: [
                "id",
                "breeder",
                "address",
                "phone",
                "createdAt",
                "updatedAt"
              ]
            },
            exclude: ["password", "email"]
          }
        ]
      });

      if (add1) {
        res.send({ message: "Input Success", data: add1 });
      }
    } else {
      res.send({ message: "Input failed" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updatePayment = async (req, res) => {
  const { id } = req.params;
  const { no_rec, proof_tf, status } = req.body;
  try {
    const update = await Payment.update(
      {
        no_rec,
        proof_tf,
        status
      },
      {
        where: { id }
      }
    );

    if (update) {
      const update1 = await Payment.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        },
        include: [
          {
            model: User,
            as: "pay",
            attributes: {
              include: [
                "id",
                "breeder",
                "address",
                "phone",
                "createdAt",
                "updatedAt"
              ]
            }
          }
        ]
      });

      res.send({ message: "Updating Success", data: update1 });
    } else {
      res.send({ message: "Updating Failed" });
    }
  } catch (error) {
    console.log(error);
  }
};
