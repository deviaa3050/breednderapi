"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "John Doe",
          gender: "Male",
          id_species: 2,
          age: "Adult",
          id_user: 1,
          about_pet: "Pet ini sangat indah sekali dan ganteng sekali",
          photo: "https://dog.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yoshi",
          gender: "Male",
          id_species: 1,
          age: "Adult",
          id_user: 2,
          about_pet: "Pet ini sangat indah sekali dan ganteng sekali",
          photo: "https://yoshi.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Noya",
          gender: "Female",
          id_species: 1,
          age: "Adult",
          id_user: 3,
          about_pet: "Pet ini sangat indah sekali dan ganteng sekali",
          photo: "https://noya.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoka",
          gender: "Female",
          id_species: 3,
          age: "Teenage",
          id_user: 4,
          about_pet: "Pet ini sangat indah sekali dan ganteng sekali",
          photo: "https://hoka.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Bento",
          gender: "Male",
          id_species: 4,
          age: "Teenage",
          id_user: 5,
          about_pet: "Pet ini sangat indah sekali dan ganteng sekali",
          photo: "https://bento.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lone",
          gender: "Male",
          id_species: 4,
          age: "Adult",
          id_user: 5,
          about_pet: "Pet ini sangat indah sekali dan ganteng sekali",
          photo: "https://lone.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pets", null, {});
  }
};
