"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          breeder: "Spiderman",
          email: "spiderman@gmail.com",
          password: "kepobanget",
          phone: "08123456789",
          address: "permata bintaro residence",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "Ayah",
          email: "ayah@gmail.com",
          password: "iniayah",
          phone: "08123456788",
          address: "Di Rumah Ayah",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "Ibu",
          email: "ibu@gmail.com",
          password: "iniibu",
          phone: "08123456787",
          address: "Di Rumah Ibu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "Kakak",
          email: "kakak@gmail.com",
          password: "inikakak",
          phone: "08123456786",
          address: "Di Rumah Kakak",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          breeder: "Adik",
          email: "adik@gmail.com",
          password: "iniadik",
          phone: "08123456785",
          address: "Di Rumah Adik",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
