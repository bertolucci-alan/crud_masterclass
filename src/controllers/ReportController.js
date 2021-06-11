const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    //Encontrar todos os usuários que ter o email terminado em @gmail.com
    //Desses usuários, listar os que moram na Rua Pinchas
    //Desses que moram na rua Pinchas, listar as tecnologias que começam com React

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@gmail.com", //função que pegará o email terminado em @gmail.com, mesmo se ele estiver
        },
      },
      include: [
        { association: "addresses", where: { street: "Pinchas" } }, //association addresses
        {
          association: "techs",
          required: false, //mesmo que o user da rua Pinchas não tenha React nas techs, ele irá aparecer
          where: {
            name: { [Op.iLike]: "React%" },
          },
        }, //association techs
      ],
    });
    return res.json(users);
  },
};
