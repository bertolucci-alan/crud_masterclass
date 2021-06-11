const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    //recebe a conexão com a base de dados
    super.init(
      {
        //chamando a class Model com init
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    );
  }
  static associate(models) {
    //relação de um user_id para muitos endereços
    this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
    this.belongsToMany(models.Tech, {
      foreignKey: "user_id",
      through: "users_techs",
      as: "techs",
    });
  }
}

module.exports = User;
