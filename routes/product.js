const express = require('express');
const router = express.Router();
const Product = require('../models').Product;
router.get('/', (req, res) => {
    Product.findAll().then(
        (products) => {
            res.json(products);
        },
        (error) => {
            res.json(error);
        }
    );
});
router.post('/', (req, res) => {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        inStore: req.body.inStore,
        categoryId: req.body.categoryId,
    }).then(
        (product) => {
            res.json(product);
        },
        (error) => {
            res.json(error);
        }
    );
});

router.delete('/:id', (req, res) => {
    Product.destroy({ where: { id: req.params.id } }).then(
        (result) => {
            res.json(result);
        },
        (error) => {
            res.json(error);
        }
    );
});

router.put('/:id', (req, res) => {
    Product.update(
        {
            name: req.body.name,
            price: req.body.price,
            inStore: req.body.inStore,
            categoryId: req.body.categoryId,
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
