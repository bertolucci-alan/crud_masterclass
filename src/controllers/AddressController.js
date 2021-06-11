const User = require("../models/User");
const Address = require("../models/Address");
const { detail } = require("./UserController");
const { update } = require("../models/User");
const { associate } = require("../models/Address");

module.exports = {
  //-----------------DELETE------------------------//
  /*
  async delete(req, res) {
    
    const { user_id } = req.params;
    const { cep, street, number } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    //encontrando tech pelo name
    const address = await Address.findOne({
      where: { street },
    });
    await user.removeAddress(address);
    return res.json();
  },
  */

  //-----------------PUT---------------------------//

  //-----------------DETAIL------------------------//

  //-----------------INDEX------------------------//

  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "addresses" },
    });
    res.json(user.addresses);
  },

  //-----------------STORE------------------------//

  async store(req, res) {
    const { user_id } = req.params;
    const { cep, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      res.status(400).json({ error: "User not found" });
    }

    const address = await Address.create({
      cep,
      street,
      number,
      user_id,
    });

    return res.json(address);
  },
};
