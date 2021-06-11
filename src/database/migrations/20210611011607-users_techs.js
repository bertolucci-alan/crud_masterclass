"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users_techs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //criação de uma chave estrangeira:
        references: { model: "users", key: "id" },
        //quando há alterações no id_user
        onUpdate: "CASCADE",
        //quando deleta o id do user:
        onDelete: "CASCADE",
      },
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //criação de uma chave estrangeira:
        references: { model: "techs", key: "id" },
        //quando há alterações no id_user
        onUpdate: "CASCADE",
        //quando deleta o id do user:
        onDelete: "CASCADE",
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users_techs");
  },
};
