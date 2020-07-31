const express = require('express')
const data = require('../data.json');
const { response } = require('express');
const router = express.Router()



router.get('/:id', (req, res) => {
    let { id } = req.params;
    const { projects } = data;
    if (!id || id < 1 || id > projects.length) {
        return res.redirect('/')
    } else {
        id--;
        const project = projects[id]
        console.dir(project)
        return res.render('project', { project })
    }
});



module.exports = router;