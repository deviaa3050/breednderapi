"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "species",
      [
        {
          name: "Cat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dog",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fish",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Turtle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Komodo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lizard",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("species", null, {});
  }
};
