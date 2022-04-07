const express = require('express');
const router = express.Router();

const Category = require('../models').Category;
router.get('/', (req, res) => {
    Category.findAll().then(
        (categories) => {
            res.json(categories);
        },
        (error) => {
            res.json(error);
        }
    );
});
router.post('/', (req, res) => {
    Category.create({ name: req.body.name }).then(
        (category) => {
            res.json(category);
        },
        (error) => {
            res.json(error);
        }
    );
});
router.delete('/:id', (req, res) => {
    Category.destroy({ where: { id: req.params.id } }).then(
        (result) => {
            res.json(result);
        },
        (error) => {
            res.json(error);
        }
    );
});
router.put('/:id', (req, res) => {
    Category.update(
        {
            name: req.body.name,
        },
        { where: { id: req.params.id } }
    ).then(
        (result) => {
            res.json(result);
        },
        (error) => {
            res.json(error);
        }
    );
});
module.exports = router;
