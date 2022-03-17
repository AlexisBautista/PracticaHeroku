const express = require('express');
const router = express.Router();
const cardController = require('../Controller/card.controller');

//controlador

router.get('/', cardController.getCard);
/*router.post('./',);
router.put('./',);
router.delete('./',); */

module.exports = router;