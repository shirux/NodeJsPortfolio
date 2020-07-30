const express = require('express')
const data = require('../data.json')
const router = express.Router()



router.get('/', (req, res) => {
    const projects = data.projects;
    res.render('index', { projects })
});



module.exports = router;