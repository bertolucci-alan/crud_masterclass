const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(connection) {
    super.init(
      {
        cep: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      { sequelize: connection }
    );
  }
  static associate(models) {
    //relação de um user_id para muitos endereços
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}
module.exports = Address;
