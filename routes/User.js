var express = require('express');
var router = express.Router();
var userCtl = require('../controllers/user');

/* GET persons listing. */
router.get('/',userCtl.getAllUsers);
/* GET person by id. */
// router.get('/:id',personCtl.getPerson);
// /* GET user listing. 
// :3000/persons/add */
router.post('/add',userCtl.addUser);
// //Add All persons :3000/persons/addall
// router.post('/addall',personCtl.addAll);
// //Find One
// // router.get('/findone',personCtl.findOne);
// // /* Remove person listing. */
router.delete('/:id',userCtl.deleteUser);
// /* Update person listing. */
router.put('/:id',userCtl.updateUser);
// router.delete('/removeMany/:name',personCtl.deleteManyPersons);


module.exports = router;
