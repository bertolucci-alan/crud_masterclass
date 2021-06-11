//requisições e respostas ao front
const { destroy, update } = require("../models/User");
const User = require("../models/User");

module.exports = {
  async update(req, res) {
    const users = await User.findByPk(req.params.users_id);
    users.update(req.body);
    return res.json(users);
  },

  async detail(req, res) {
    const users = await User.findByPk(req.params.users_id); //buscando por id
    return res.json(users);
  },

  async destroy(req, res) {
    const users = await User.findByPk(req.params.users_id); //deletando por id
    users.destroy();
    return res.json(users);
  },

  async index(req, res) {
    const users = await User.findAll(); //bucando por todos os usuários
    return res.json(users);
  },

  async store(req, res) {
    const { name, surname, email, age } = req.body;

    const users = await User.create({
      name,
      surname,
      email,
      age,
    });

    return res.json(users);
  },
};
