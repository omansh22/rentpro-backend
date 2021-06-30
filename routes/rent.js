const express = require('express')
const router = express.Router();

const { authenticate} = require('../middleware/auth')

const {search,add,filter,getrentbyId,increasing,decreasing} = require('../controllers/rent')

router.post('/search',authenticate,search);
router.post('/add',authenticate,add)
router.post('/filter',authenticate,filter)
router.post('/sort/inc',increasing)
router.post('/sort/dec',decreasing)
router.get('/:id',getrentbyId)




module.exports = router;