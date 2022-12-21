let express = require("express")

let router = express.Router()
let resController = require('./controllers/resController');

router.get('/', (req,res)=> res.redirect('/reservation'));
router.get('/reservation', resController.Reservation);
router.post('/encodage', resController.Encodage);
router.post('/validation', resController.Validation);
router.post('/confirmation', resController.Confirmation);
//router.get('/', <nom_variable_du controlleur>.<nom de la fonction du controlleur>)

module.exports = router