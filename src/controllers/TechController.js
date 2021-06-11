const Tech = require("../models/Tech");
const User = require("../models/User");
const { create, findOne } = require("../models/User");
const { index } = require("./UserController");

module.exports = {
  //-----------------INDEX------------------------//

  async index(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id, {
      include: { association: "techs", through: { attributes: [] } },
    });

    return res.json(user.techs);
  },

  //-----------------STORE------------------------//

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    const [tech] = await Tech.findOrCreate({
      //se não encontrar, cria-se uma nova tech
      where: { name },
    });
    await user.addTech(tech);
    return res.json(tech);
  },

  //-----------------DELETE------------------------//

  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    //encontrando tech pelo name
    const tech = await Tech.findOne({
      where: { name },
    });
    await user.removeTech(tech);
    return res.json();
  },
};
