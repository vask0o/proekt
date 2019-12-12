const router = require('express').Router();
const feedController = require('../controllers/feed');


router.get('/items', feedController.getItems);
router.post('/item/create', feedController.createItem);
router.put('/item/edit', feedController.editItem);
router.delete('/item/delete', feedController.deleteItem);




module.exports = router;