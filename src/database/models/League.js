module.exports = (sequelize, DataTypes) => {
    let alias = 'League'

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },

        year: {
            type: DataTypes.STRING(5),
            allowNull: false
        },

        firstPlace: {
            type: DataTypes.STRING(50),
            defaultValue: null
        },

        secondPlace: {
            type: DataTypes.STRING(50),
            defaultValue: null
        },

        thirdPlace: {
            type: DataTypes.STRING(50),
            defaultValue: null
        },

        topScorer: {
            type: DataTypes.STRING(70),
            defaultValue: null
        },

        goalkeeper: {
            type: DataTypes.STRING(70),
            defaultValue: null
        },

        bestPlayer: {
            type: DataTypes.STRING(70),
            defaultValue: null
        }

    }

    let config = {
        tableName: 'leagues',
        underscored: true,
        timestamps: false
    }


    const League = sequelize.define(alias, cols, config)

    //Relaciones

    League.associate = (models) => {

        League.hasMany(models.Session, {
            as: "sessions",
            foreignKey: "id_league"
        })

        League.hasMany(models.Fixture, {
            as: "fixture",
            foreignKey: "id_league"
        })

    }
    

    return League

}