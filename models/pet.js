"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    "pet",
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      id_species: DataTypes.INTEGER,
      age: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
      about_pet: DataTypes.STRING,
      photo: DataTypes.STRING
    },
    {}
  );
  pet.associate = function(models) {
    // associations can be defined here
    pet.belongsTo(models.species, {
      foreignKey: "id_species",
      as: "category"
    });

    pet.belongsTo(models.user, {
      foreignKey: "id_user",
      as: "breeder"
    });
  };
  return pet;
};
