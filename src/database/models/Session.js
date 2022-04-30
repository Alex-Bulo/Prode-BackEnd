module.exports = (sequelize, DataTypes) => {
    let alias = 'Session'

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

        createdAt : {
            type: DataTypes.DATE,
            defaultValue: Date.now()
        }
    }

    let config = {
        tableName: 'sessions',
        underscored: true,
        timestamps: false
    }


    const Session = sequelize.define(alias, cols, config)

    //Relaciones

    Session.associate = (models) => {
        
        Session.belongsTo(models.League,{
            as: "league",
            foreignKey: "id_league"
        }),

        Session.belongsToMany(models.User, {
            as: "users",
            through:models.UserSession,
            foreignKey: "id_session"
        })

        Session.hasMany(models.BetMatch, {
            as: "betMatches",
            foreignKey: "id_session"
        })

        Session.hasMany(models.BetPodium, {
            as: "betPodium",
            foreignKey: "id_session"
        })

        Session.hasMany(models.Score, {
            as: "scores",
            foreignKey: "id_session"
        })
 
    }
    

    return Session

}