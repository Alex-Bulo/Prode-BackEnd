module.exports = (sequelize, DataTypes) => {
    let alias = 'User'

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique:true
        },

        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        photo: {
            type: DataTypes.STRING(35),
            allowNull:false,
            defaultValue: 'default1.png'
        },

        backgroundLarge: {
            type: DataTypes.STRING(30),
            allowNull:false,
            defaultValue: 'bkg-lg-0.png'
        },
        
        backgroundSmall: {
            type: DataTypes.STRING(30),
            allowNull:false,
            defaultValue: 'bkg-sm-0.png'
        }

    }

    let config = {
        tableName: 'users',
        underscored: true,
        timestamps: false
    }


    const User = sequelize.define(alias, cols, config)

    //Relaciones

    User.associate = (models) => {

        User.belongsToMany(models.Session, {
            as: "sessions",
            through:models.UserSession,
            foreignKey: "id_user"
        })

        User.hasMany(models.BetMatch, {
            as: "betMatches",
            foreignKey: "id_user"
        })

        User.hasMany(models.BetPodium, {
            as: "betPodium",
            foreignKey: "id_user"
        })

        User.hasMany(models.Score, {
            as: "scores",
            foreignKey: "id_user"
        })
    }
    

    return User

}