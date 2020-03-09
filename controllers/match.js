const models = require("../models");
const User = models.user;
const Pet = models.pet;
const Species = models.species;
const Match = models.match;

exports.checkLiked = async (id_pet, id_pet_liked) => {
  //check apa id_pet pernah disukai id_pet_liked sebelumnya
  try {
    const checkLiked1 = await Match.findOne({
      where: { id_pet: id_pet_liked, id_pet_liked: id_pet } //ini tempat check nya
    });

    if (checkLiked1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.addMatch = async (req, res) => {
  try {
    const { id_pet, id_pet_liked } = req.body;
    const checkLiked1 = await this.checkLiked(id_pet, id_pet_liked); //check apa fungsi checkLiked bernilai true atau false

    if (checkLiked1) {
      const match1 = await Match.update(
        //kalo iya diupdate jadi TRUE
        {
          status: "true",
          updatedAt: new Date()
        },
        {
          where: {
            id_pet: id_pet_liked, // dibalik karena yang di update adalah data yg lama dimana id_pet nilainya id_pet_liked yang sekarang
            id_pet_liked: id_pet
          }
        }
      );

      const data = await Match.findOne({
        where: { id_pet: id_pet_liked, id_pet_liked: id_pet }
      });
      res.send({ data });
    } else {
      const match2 = await Match.findOne({
        where: { id_pet, id_pet_liked }
      });

      if (!match2) {
        const match3 = await Match.create({
          id_pet,
          id_pet_liked,
          status: "false"
        });

        const data = await Match.findOne({
          where: { id_pet, id_pet_liked }
        });

        res.send({ data });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

exports.checkMatch = async (req, res) => {
  try {
    const { id_pet, id_pet_liked } = req.query;
    // const match1 = await Match.findOne({
    //   where: { id_pet, id_pet_liked }
    // });
    const match2 = await Match.findOne({
      where: { id_pet, id_pet_liked }
    });
    let id1 = req.query.id_pet;
    let id2 = req.query.id_pet_liked;
    if (match2) {
      res.send({ message: "data found", match2 });
    } else {
      const match3 = await Match.findOne({
        where: {
          id_pet: id2,
          id_pet_liked: id1
        }
      });
      if (match3) {
        res.send({ message: "data found", match3 });
      } else {
        res.send({ message: "data not found" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_pet, id_pet_liked, status } = req.body;

    const update1 = await Match.update(
      {
        id_pet,
        id_pet_liked,
        status
      },
      {
        where: { id }
      }
    );

    if (update1) {
      const data1 = await Match.findOne({ where: { id: req.params.id } });
      res.send({ data1 });
    } else {
      res.send({ message: "update failed" });
    }
  } catch (error) {
    console.log(error);
  }
};
