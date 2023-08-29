module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    "Location",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {}
  );
  Location.associate = function (models) {
    Location.belongsTo(models.Trip, {
      foreignKey: {
        name: "tripId",
        allowNull: false,
        onDelete: "CASCADE",
      },
    });
  };
  return Location;
};
