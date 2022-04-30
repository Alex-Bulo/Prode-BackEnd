module.exports = (sequelize, DataTypes) => {
  let alias = "Score";

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

    score: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },
  };

  let config = {
    tableName: "scores",
    underscored: true,
    timestamps: false,
  };

  const Score = sequelize.define(alias, cols, config);

  //Relaciones

  Score.associate = (models) => {
    Score.belongsTo(models.Session, {
      as: "session",
      foreignKey: "id_session",
    });
    Score.belongsTo(models.User, {
      as: "user",
      foreignKey: "id_user",
    });
  };

  return Score;
};
