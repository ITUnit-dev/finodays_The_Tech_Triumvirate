const express = require('express');
const router = express.Router();

router.use(express.static('../public'));

const jsonData = require('../data/json_data_2.json');

router.get('/',(req,res)=>{
    res.json(jsonData);
})

module.exports = router;