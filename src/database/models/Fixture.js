module.exports = (sequelize, DataTypes) => {
    let alias = 'Fixture'

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        idLeague: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

        home: {
            type: DataTypes.STRING(20)
        },

        homeLogo: {
            type: DataTypes.STRING(40)
        },

        homeScore: {
            type: DataTypes.INTEGER.UNSIGNED
        },

        away: {
            type: DataTypes.STRING(20)
        },

        awayLogo: {
            type: DataTypes.STRING(40)
        },

        awayScore: {
            type: DataTypes.INTEGER.UNSIGNED
        },

        winner: {
            type: DataTypes.STRING(20)
        },

        date: {
            type: DataTypes.DATE
        },

        round: {
            type: DataTypes.STRING(20)
        },

        venue: {
            type: DataTypes.STRING(20)
        },

        referee: {
            type: DataTypes.STRING(20)
        },

        finished: {
            type: DataTypes.BOOLEAN,
            defaultValue:false,
        }

    }

    let config = {
        tableName: 'fixtures',
        underscored: true,
        timestamps: false
    }


    const Fixture = sequelize.define(alias, cols, config)

    //Relaciones

    Fixture.associate = (models) => {

        Fixture.belongsTo(models.League, {
            as: "league",
            foreignKey: "id_league"
        })

        Fixture.hasMany(models.BetMatch, {
            as: "betMatches",
            foreignKey: "id_fixture"
        })

    }
    

    return Fixture

}