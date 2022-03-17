const cardModel = require('../models/card.model');
const cardController = {};

cardController.getCard = async (req, res) => {

  const card = await cardModel.find();
  res.json(card);
};

cardController.addCard = async (req, res) => {
  const card = new cardModel(req.body);
  await card.save();
  res.json({'status': 'Auto guardado'});
};

module.exports = cardController;