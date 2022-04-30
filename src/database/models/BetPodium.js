module.exports = (sequelize, DataTypes) => {
  let alias = "BetPodium";

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

    idUser: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    fistPlace: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },

    pointsFirst: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },

    secondPlace: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },

    pointsSecond: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },

    thirdPlace: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },

    pointsThird: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },

    topScorer: {
      type: DataTypes.STRING(70),
      defaultValue: null,
    },

    pointsTopScorer: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },

    goalkeeper: {
      type: DataTypes.STRING(70),
      defaultValue: null,
    },

    pointsGoalkeeper: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },

    bestPlayer: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },

    pointsBestPlayer: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },
  };

  let config = {
    tableName: "bet_podium",
    underscored: true,
    timestamps: false,
  };

  const BetPodium = sequelize.define(alias, cols, config);

  //Relaciones

  BetPodium.associate = (models) => {
    BetPodium.belongsTo(models.Session, {
      as: "session",
      foreignKey: "id_session",
    });

    BetPodium.belongsTo(models.User, {
      as: "user",
      foreignKey: "id_user",
    });
  };

  return BetPodium;
};
