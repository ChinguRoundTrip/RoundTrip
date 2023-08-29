module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    "Trip",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {}
  );
  Trip.associate = function (models) {
    Trip.hasMany(models.Location, {
      foreignKey: "tripId",
    });
    Trip.belongsTo(models.users, {
      foreignKey: {
        name: "userId",
        allowNull: false,
        onDelete: "CASCADE",
      },
    });
  };
  return Trip;
};
