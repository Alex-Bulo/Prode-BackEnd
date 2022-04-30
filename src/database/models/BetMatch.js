module.exports = (sequelize, DataTypes) => {
  let alias = "BetMatch";

  let cols = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    idSession: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    idFixture: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    idUser: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    home: {
      type: DataTypes.INTEGER.UNSIGNED,
    },

    away: {
      type: DataTypes.INTEGER.UNSIGNED,
    },

    winner: {
      type: DataTypes.STRING(20),
    },

    double: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    points: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },
  };

  let config = {
    tableName: "bet_matches",
    underscored: true,
    timestamps: false,
  };

  const BetMatch = sequelize.define(alias, cols, config);

  //Relaciones

  BetMatch.associate = (models) => {
    BetMatch.belongsTo(models.Session, {
      as: "session",
      foreignKey: "id_session",
    });

    BetMatch.belongsTo(models.Fixture, {
      as: "fixture",
      foreignKey: "id_fixture",
    });
    BetMatch.belongsTo(models.User, {
      as: "user",
      foreignKey: "id_user",
    });
  };

  return BetMatch;
};
