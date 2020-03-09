"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      id_user: DataTypes.INTEGER,
      no_rec: DataTypes.INTEGER,
      proof_tf: DataTypes.STRING,
      status: DataTypes.ENUM("free", "premium")
    },
    {}
  );
  payment.associate = function(models) {
    // associations can be defined here
    payment.belongsTo(models.user, {
      foreignKey: "id_user",
      as: "pay"
    });
  };
  return payment;
};
