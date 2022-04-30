module.exports = (sequelize, DataTypes) => {
    let alias = 'UserSession'

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        idUser: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        
        idSession: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }

    let config = {
        tableName: 'users_sessions',
        underscored: true,
        timestamps: false
    }


    const UserSession = sequelize.define(alias, cols, config)

    //Relaciones

    UserSession.associate = (models) => {
        
        UserSession.belongsTo(models.User,{
            as: "users",
            foreignKey: "id_user"
        }),

        UserSession.belongsTo(models.Session,{
            as: "sessions",
            foreignKey: "id_session"
        })
        
    }
    

    return UserSession

}