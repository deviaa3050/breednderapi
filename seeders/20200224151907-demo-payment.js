"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "payments",
      [
        {
          id_user: 1,
          no_rec: 123456,
          proof_tf: "here's the proof",
          status: "free",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_user: 2,
          no_rec: 123457,
          proof_tf: "here's the proof",
          status: "free",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_user: 3,
          no_rec: 123458,
          proof_tf: "here's the proof",
          status: "free",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_user: 4,
          no_rec: 123459,
          proof_tf: "here's the proof",
          status: "free",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_user: 5,
          no_rec: 123454,
          proof_tf: "here's the proof",
          status: "free",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments", null, {});
  }
};
