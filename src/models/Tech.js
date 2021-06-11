const { Model, DataTypes } = require("sequelize");

class Tech extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      { sequelize: connection, tableName: "techs" }
    );
  }
  static associate(models) {
    //muitos para muitos
    this.belongsToMany(models.User, {
      foreignKey: "tech_id", //nome da chave da techs
      through: "users_techs", //tabela de relação
      as: "users", //nome da relação
    });
  }
}
module.exports = Tech;
